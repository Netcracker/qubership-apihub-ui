#!/bin/sh
if ! whoami >/dev/null 2>&1; then
  if [ -w /etc/passwd ]; then
    echo "default:x:$(id -u):0:default user:${HOME}:/sbin/nologin" >>/etc/passwd
  fi
fi

DNS_RESOLVERS="$(awk '/^nameserver/{print $2}' /etc/resolv.conf | paste -sd' ' -)"
export DNS_RESOLVERS

POD_NAMESPACE="${POD_NAMESPACE:-}"
if [ -z "$POD_NAMESPACE" ] && [ -f /var/run/secrets/kubernetes.io/serviceaccount/namespace ]; then
  POD_NAMESPACE="$(cat /var/run/secrets/kubernetes.io/serviceaccount/namespace)"
fi
[ -n "$POD_NAMESPACE" ] || POD_NAMESPACE="default"
export POD_NAMESPACE

CLUSTER_DOMAIN="$(
  awk '
  /^search/ {
    for (i=2; i<=NF; i++) {
      if ($i ~ /\.svc\./) { sub(/.*\.svc\./, "", $i); print $i; exit }
    }
  }' /etc/resolv.conf || true
)"
[ -n "${CLUSTER_DOMAIN:-}" ] || CLUSTER_DOMAIN="cluster.local"
export CLUSTER_DOMAIN

adjust_addr() {
  var="$1"
  val="$(eval echo \$"$var")"
  case "$val" in
  *localhost* | *host.docker.internal* | *qubership-*) ;;
  "")
    val="invalid.invalid.:80"
    ;;
  *)
    val="${val%:*}.${POD_NAMESPACE}.svc.${CLUSTER_DOMAIN}.:${val##*:}"
    ;;
  esac
  eval export "$var"=\"\$val\"
}

adjust_addr APIHUB_NC_SERVICE_ADDRESS
adjust_addr API_LINTER_SERVICE_ADDRESS
adjust_addr APIHUB_AGENTS_BACKEND_ADDRESS

# Grafana Faro runtime config. When a collector address is provided the browser is pointed at
# the same-origin "/faro" proxy (see nginx.conf.template); otherwise Faro stays disabled.
# Escape backslashes and double quotes so a value with either can't produce invalid JS.
faro_js_escape() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}
if [ -n "${APIHUB_FARO_COLLECTOR_ADDRESS:-}" ]; then
  FARO_BODY="window.__APIHUB_FARO_CONFIG__ = {
  collectorUrl: \"/faro\",
  apiKey: \"$(faro_js_escape "${APIHUB_FARO_API_KEY:-}")\",
  environment: \"$(faro_js_escape "${APIHUB_FARO_ENVIRONMENT:-}")\",
  appVersion: \"$(faro_js_escape "${APIHUB_FARO_APP_VERSION:-}")\"
};"
else
  FARO_BODY="window.__APIHUB_FARO_CONFIG__ = {};"
fi
for dir in portal agents; do
  target="/usr/share/nginx/html/${dir}/config.js"
  [ -d "/usr/share/nginx/html/${dir}" ] && printf '%s\n' "$FARO_BODY" >"$target"
done

# Default to a non-resolvable sentinel so the /faro location always renders even when unset.
APIHUB_FARO_COLLECTOR_ADDRESS="${APIHUB_FARO_COLLECTOR_ADDRESS:-invalid.invalid.:80}"
export APIHUB_FARO_COLLECTOR_ADDRESS

# No need to modify APIHUB_BACKEND_ADDRESS as its resolution is static
# shellcheck disable=SC2016 # envsubst requires literal variable names in single quotes
envsubst '${APIHUB_BACKEND_ADDRESS} ${APIHUB_NC_SERVICE_ADDRESS} ${API_LINTER_SERVICE_ADDRESS} ${APIHUB_AGENTS_BACKEND_ADDRESS} ${APIHUB_FARO_COLLECTOR_ADDRESS} ${DNS_RESOLVERS}' </app/nginx.conf.template >/app/nginx/nginx.conf
nginx -c /app/nginx/nginx.conf -g "daemon off;"

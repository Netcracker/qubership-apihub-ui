#!/bin/sh
if ! whoami &> /dev/null; then
  if [ -w /etc/passwd ]; then
    echo "default:x:$(id -u):0:default user:${HOME}:/sbin/nologin" >> /etc/passwd
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

CLUSTER_DOMAIN="$(awk '
  /^search/ {
    for (i=2; i<=NF; i++) {
      if ($i ~ /\.svc\./) { sub(/.*\.svc\./, "", $i); print $i; exit }
    }
  }' /etc/resolv.conf || true
)"
[ -n "${CLUSTER_DOMAIN:-}" ] || CLUSTER_DOMAIN="cluster.local"
export CLUSTER_DOMAIN


APIHUB_NC_SERVICE_ADDRESS="${APIHUB_NC_SERVICE_ADDRESS:+${APIHUB_NC_SERVICE_ADDRESS%:*}.${POD_NAMESPACE}.svc.${CLUSTER_DOMAIN}.:${APIHUB_NC_SERVICE_ADDRESS##*:}}"
APIHUB_NC_SERVICE_ADDRESS="${APIHUB_NC_SERVICE_ADDRESS:-invalid.invalid.:80}"
export APIHUB_NC_SERVICE_ADDRESS

API_LINTER_SERVICE_ADDRESS="${API_LINTER_SERVICE_ADDRESS:+${API_LINTER_SERVICE_ADDRESS%:*}.${POD_NAMESPACE}.svc.${CLUSTER_DOMAIN}.:${API_LINTER_SERVICE_ADDRESS##*:}}"
API_LINTER_SERVICE_ADDRESS="${API_LINTER_SERVICE_ADDRESS:-invalid.invalid.:80}"
export API_LINTER_SERVICE_ADDRESS

APIHUB_AGENTS_BACKEND_ADDRESS="${APIHUB_AGENTS_BACKEND_ADDRESS:+${APIHUB_AGENTS_BACKEND_ADDRESS%:*}.${POD_NAMESPACE}.svc.${CLUSTER_DOMAIN}.:${APIHUB_AGENTS_BACKEND_ADDRESS##*:}}"
APIHUB_AGENTS_BACKEND_ADDRESS="${APIHUB_AGENTS_BACKEND_ADDRESS:-invalid.invalid.:80}"
export APIHUB_AGENTS_BACKEND_ADDRESS

# No need to modify APIHUB_BACKEND_ADDRESS as its resolution is static

envsubst '${APIHUB_BACKEND_ADDRESS} ${APIHUB_NC_SERVICE_ADDRESS} ${API_LINTER_SERVICE_ADDRESS} ${APIHUB_AGENTS_BACKEND_ADDRESS} ${DNS_RESOLVERS}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
nginx -g "daemon off;"

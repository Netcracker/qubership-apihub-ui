// Default no-op OpenTelemetry config. Overwritten at container start by nginx/entrypoint.sh
// from APIHUB_OTEL_* environment variables. Kept so dev/build never 404 on /agents/config.js.
window.__APIHUB_OTEL_CONFIG__ = {};

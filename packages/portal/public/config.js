// Default no-op Faro config. Overwritten at container start by nginx/entrypoint.sh
// from APIHUB_FARO_* environment variables. Kept so dev/build never 404 on /config.js.
window.__APIHUB_FARO_CONFIG__ = {};

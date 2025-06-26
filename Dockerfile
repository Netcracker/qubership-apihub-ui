FROM docker.io/node:20 as builder

ARG TAG=dev

WORKDIR /workspace

RUN --mount=type=secret,id=npmrc,target=.npmrc mv $(npm pack @netcracker/qubership-apihub-ui-agents@"$TAG") qubership-apihub-ui-agents.tgz
RUN --mount=type=secret,id=npmrc,target=.npmrc mv $(npm pack @netcracker/qubership-apihub-ui-editor@"$TAG") qubership-apihub-ui-editor.tgz
RUN --mount=type=secret,id=npmrc,target=.npmrc mv $(npm pack @netcracker/qubership-apihub-ui-portal@"$TAG") qubership-apihub-ui-portal.tgz

FROM docker.io/nginx:1.28.0-alpine3.21

COPY nginx/errors                        /var/www/error
COPY nginx/nginx.conf.template           /etc/nginx/nginx.conf.template
COPY nginx/entrypoint.sh                 /tmp

RUN mkdir -p /usr/share/nginx/html/editor /usr/share/nginx/html/agents /usr/share/nginx/html/portal

COPY --from=builder /workspace/qubership-apihub-ui-agents.tgz .
COPY --from=builder /workspace/qubership-apihub-ui-editor.tgz .
COPY --from=builder /workspace/qubership-apihub-ui-portal.tgz .

RUN tar zxvf ./qubership-apihub-ui-agents.tgz && mv ./package/dist/* /usr/share/nginx/html/agents && rm -rf ./package
RUN tar zxvf ./qubership-apihub-ui-editor.tgz && mv ./package/dist/* /usr/share/nginx/html/editor && rm -rf ./package
RUN tar zxvf ./qubership-apihub-ui-portal.tgz && mv ./package/dist/* /usr/share/nginx/html/portal && rm -rf ./package

RUN find /usr/share/nginx/html -type f -exec touch {} +

# giving permissions to nginx
RUN chmod -R 777 /var/log/nginx /var/cache/nginx/ /var/run/ /usr/share/nginx/html/ /etc/nginx/ && \
    chmod -R +x /tmp/

EXPOSE 8080

USER 1000

ENTRYPOINT ["/tmp/entrypoint.sh"]

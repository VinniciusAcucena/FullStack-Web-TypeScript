FROM alpine:3.19.0


RUN apk add --no-cache nodejs && \
    apk add --no-cache npm && \
    apk add --no-cache git

LABEL desenvolvedor="Vinnicius"
LABEL mensagem="Uso de LABEL"
LABEL versao="1.0"

ENV FRONT_PRD="https://app.com.br"
ENV BACK_PRD="https://app.com.br:3002"

ENV MSG "Variavel de ambiente o dockerfile"

RUN echo ${MSG} > /tmp/arquivo_criado_no_build.txt
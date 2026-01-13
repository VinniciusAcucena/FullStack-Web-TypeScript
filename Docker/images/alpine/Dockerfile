ARG ALPINE_VERSION

FROM alpine:${ALPINE_VERSION}

WORKDIR /

RUN apk add --no-cache nodejs && \
    apk add --no-cache npm && \
    apk add --no-cache git

RUN adduser -D Vinnicius

USER Vinnicius

LABEL desenvolvedor="Vinnicius"
LABEL mensagem="Uso de LABEL"
LABEL versao="1.0"

ARG FRONT_PRD="https://app.com.br"
ARG BACK_PRD="https://app.com.br:3002"

ENV FRONT_PRD=${FRONT_PRD}
ENV BACK_PRD=${BACK_PRD}

ENV MSG "Variavel de ambiente o dockerfile"

WORKDIR /tmp/

RUN echo ${MSG} > ./arquivo_criado_no_build.txt

ADD ./arquivo.txt ./

COPY ./arquivo_2.txt ./

COPY ./arquivo_2.txt ./arquivo.txt ./copy_folder/

ENTRYPOINT ["echo", "Parametro via ENTRYPOINT"]

CMD ["Parametro via CMD"]

# CMD ["/bin/sh", "-c", "echo Texto para quando container"]

EXPOSE 3000

EXPOSE 3030
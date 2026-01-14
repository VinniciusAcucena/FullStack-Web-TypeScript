FROM ubuntu as build

RUN apt update && apt install build-essential -y

RUN mkdir /opt/app/

WORKDIR /opt/app/

COPY Main.c .

RUN gcc ./Main.c -static -o Main

FROM alpine as prd

COPY --from=build /opt/app/Main /opt/app/Main

FROM prd as run

CMD ["/opt/app/Main"]
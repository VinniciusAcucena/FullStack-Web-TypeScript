FROM ubuntu

RUN apt update && apt install build-essential -y

RUN mkdir /opt/app/

WORKDIR /opt/app/

COPY Main.c .

RUN gcc ./Main.c -static -o Main

CMD ["./Main"]
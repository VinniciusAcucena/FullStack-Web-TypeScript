CREATE DATABASE usuarios;

DROP database usuarios;

CREATE DATABASE aplicacao;

USE aplicacao;
CREATE TABLE usuarios
(
	nome varchar(30),
    email varchar(30),
    senha varchar(10)
);

DESCRIBE usuarios;

DROP TABLE usuarios;
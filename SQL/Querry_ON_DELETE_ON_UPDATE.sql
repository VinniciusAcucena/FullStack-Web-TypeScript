CREATE DATABASE comercio;
USE comercio;

CREATE TABLE categorias
(
	id_categoria INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30)
);

INSERT INTO categorias VALUES (null, 'Eletrônicos');
INSERT INTO categorias VALUES (null, 'Moveis');

CREATE TABLE produtos 
(
	id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT UNSIGNED,
    nome VARCHAR(30),
    preco DECIMAL(10,2),
    FOREIGN KEY(id_categoria) REFERENCES categorias (id_categoria)
		ON DELETE set null
        ON UPDATE restrict
);

INSERT INTO produtos VALUES(null, 1, 'Notebook', 1000);
INSERT INTO produtos VALUES(null, 2, 'Mesa de jantar', 900);

SELECT * FROM produtos;

DELETE FROM categorias
WHERE id_categoria=1;

UPDATE categorias 
SET id_categoria=3
WHERE id_categoria=2;
CREATE TABLE IF NOT EXISTS clientes 
(
	id_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
    sobrenome VARCHAR(100)
);

ALTER TABLE clientes ADD COLUMN id_cliente_indicacao INT UNSIGNED;
INSERT INTO clientes VALUES(null, 'Jamilton', 'Damasceno', 1);
UPDATE clientes SET id_cliente_indicacao = 1 WHERE id_cliente = 3;
UPDATE clientes SET id_cliente_indicacao = 4 WHERE id_cliente = 2;

SELECT * FROM clientes;
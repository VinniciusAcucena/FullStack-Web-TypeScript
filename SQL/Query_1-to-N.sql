CREATE TABLE IF NOT EXISTS clientes 
(
	id_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
    sobrenome VARCHAR(100)
);
INSERT INTO clientes VALUES(null, 'Maria', 'Almeida');
INSERT INTO clientes VALUES(null, 'João', 'Silva');
INSERT INTO clientes VALUES(null, 'Carla', 'Carvalho');

CREATE TABLE IF NOT EXISTS pedidos 
(
	id_pedido INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT UNSIGNED NOT NULL,
    data_pedido DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(15,2) NOT NULL,
    CONSTRAINT clientes_id_cliente_fk 
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO pedidos VALUES(NULL, 1, DEFAULT, 'Notebook Samsung Book', 1, 3000);
INSERT INTO pedidos VALUES(NULL, 1, DEFAULT, 'Smart TV LED 32” HD', 1, 2000);
INSERT INTO pedidos VALUES(NULL, 2, DEFAULT, 'Smart TV LED 32” HD', 1, 2000);

SELECT * FROM pedidos;

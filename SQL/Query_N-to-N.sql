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
    quantidade INT NOT NULL,
    total DECIMAL(15,2),
    CONSTRAINT clientes_id_cliente_fk 
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);
INSERT INTO pedidos VALUES(NULL, 1, DEFAULT, 2, 50000);

CREATE TABLE IF NOT EXISTS pedidos_produtos
(
    id_pedido INT UNSIGNED NOT NULL,
    id_produto INT UNSIGNED NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(15,2),
    CONSTRAINT pedidos_id_pedido_fk 
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    CONSTRAINT produtos_id_produto_fk 
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto),
    PRIMARY KEY (id_pedido, id_produto)
);

INSERT INTO pedidos_produtos VALUES(1, 1, 1, 3000.00);
INSERT INTO pedidos_produtos VALUES(1, 2, 1, 2000.00);


CREATE TABLE IF NOT EXISTS produtos 
(
    id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    preco DECIMAL(15,2),
    categoria VARCHAR(70),
    marca VARCHAR(70),
    foto VARCHAR(70)
);
INSERT INTO produtos VALUES(
null, 'Notebook Dell Inspiron 15 3000', 3000.00,
'Eletrônicos', 'Dell', 'foto1...'
);

INSERT INTO produtos VALUES(
null, 'Smart TV LED 32” HD ', 2000.00,
'TV', 'HQ', 'foto1...'
);


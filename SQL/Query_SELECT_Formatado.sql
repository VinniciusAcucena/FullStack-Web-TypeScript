
CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100),
    idade TINYINT,
    cpf VARCHAR(11)
);

INSERT INTO clientes VALUES (NULL, "Vinnicius", 25, "16544229750");
INSERT INTO clientes VALUES (NULL, "Maria Silva", 45, "39823498721");

CREATE TABLE IF NOT EXISTS produtos (
    id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    preco DECIMAL(10,2),
    marca VARCHAR(70)
);

INSERT INTO produtos VALUES (
    NULL, "Notebook", 2899.00,
    "lenovo"
);
INSERT INTO produtos VALUES (
    NULL, "Mouse", 118.00,
    "Redragon"
);
INSERT INTO produtos VALUES (
    NULL, "Nintendo Switch", 2099.00,
    "Nintendo"
);

CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT UNSIGNED NOT NULL,
    data_pedido DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_entrega DATE NOT NULL,
    forma_pagamento VARCHAR(100) NOT NULL,
    endereco_entrega VARCHAR(100) NOT NULL,
    quantidade_itens SMALLINT NOT NULL,
    total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO pedidos VALUES (
    NULL, 1, DEFAULT, "2025-11-20", "Boleto", "Rua Brigadeiro, 3045, APTO 10",
    2, 3017.00
);
INSERT INTO pedidos VALUES (
    NULL, 2, DEFAULT, "2025-11-15", "cartão de crédito", "AV. Pompéia, 3040",
    1, 2099.00
);

CREATE TABLE IF NOT EXISTS itens_pedido (
    id_pedido INT UNSIGNED NOT NULL,
    id_produto INT UNSIGNED NOT NULL,
    quantidade SMALLINT NOT NULL,
    preco DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto),
    PRIMARY KEY (id_pedido, id_produto)
);

INSERT INTO itens_pedido VALUES (
    1, 1, 1, 2089.00
);
INSERT INTO itens_pedido VALUES (
    1, 2, 1, 118.00
);
INSERT INTO itens_pedido VALUES (
    2, 3, 1, 2099.00
);

SELECT pe.id_pedido, pe.id_cliente, 
	DATE_FORMAT(pe.data_entrega, "%d/%m/%Y") AS data_entrega, cl.nome_completo, 
    ip.preco FROM pedidos pe
INNER JOIN clientes cl 
ON cl.id_cliente = pe.id_cliente
INNER JOIN itens_pedido ip
ON ip.id_pedido = pe.id_pedido;









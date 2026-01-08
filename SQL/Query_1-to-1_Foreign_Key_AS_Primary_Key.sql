CREATE DATABASE loja;
USE loja;

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
	null, "Notebook Dell Inspiron 15 3000", 3200.90,
    "Eletrônicos", "Dell", "Foto1..."
);

CREATE TABLE IF NOT EXISTS produtos_detalhes
(
	id_produto INT UNSIGNED NOT NULL PRIMARY KEY,
    descricao TEXT,
    informacoes_adicionais TEXT,
    cor VARCHAR(15),
    memoria_interna VARCHAR(8),
    tipo_tela VARCHAR(8),
    conectividade VARCHAR(8),
    CONSTRAINT produtos_id_produto_fk
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO produtos_detalhes VALUES(
	1, "Descrição de teste2...", "Informações de teste...", "Prata",
    "500GB", "Retina", "Wifi"
);

select * from produtos;
select * from produtos_detalhes;

DROP TABLE produtos;
DROP TABLE produtos_detalhes;
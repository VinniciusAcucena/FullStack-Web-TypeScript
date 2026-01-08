CREATE TABLE produtos
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(15,2),
    categoria VARCHAR(70),
    marca VARCHAR(70),
    PRIMARY KEY (id)
);

INSERT INTO produtos (titulo, descricao, preco, categoria, marca) VALUES
(
  'Notebook Lenovo Ideapad',
  'Notebook com processador i5, 8GB de RAM e SSD de 256GB.',
  3499.90,
  'Informática',
  'Lenovo'
),
(
  'Smartphone Samsung Galaxy A15',
  'Celular com tela 6.5 polegadas, 128GB de armazenamento.',
  1299.99,
  'Telefonia',
  'Samsung'
),
(
  'Mouse Gamer RGB',
  'Mouse óptico gamer com iluminação RGB e 6 botões.',
  149.90,
  'Periféricos',
  'Redragon'
),
(
  'Fone de Ouvido Bluetooth',
  'Fone sem fio com cancelamento de ruído e bateria de longa duração.',
  299.50,
  'Áudio',
  'JBL'
),
(
  'Cafeteira Elétrica',
  'Cafeteira elétrica com capacidade para 15 xícaras.',
  219.00,
  'Eletrodomésticos',
  'Philco'
);

SELECT * FROM produtos;

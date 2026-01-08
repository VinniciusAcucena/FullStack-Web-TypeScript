CREATE TABLE pedidos
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    produto_id INT UNSIGNED NOT NULL,
    preco DECIMAL(15,2),
    quantidade INT,
    usuario VARCHAR(30),
    
    CONSTRAINT produtos_id_fk
    FOREIGN KEY(produto_id) REFERENCES produtos(id)
);

Insert INTO pedidos 
	VALUES(null, 2, 1200.00, 2, 'Maria.Silva'),
		(null, 1, 3499.90, 1, 'Vinnicius'),
		(null, 2, 149.90, 2, 'José.Bezerra'),
		(null, 1, 219.00, 1, 'Ana.Maria');
        
SELECT * FROM pedidos;
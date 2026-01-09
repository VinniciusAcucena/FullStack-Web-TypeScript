CREATE DATABASE joins;
USE joins;

CREATE TABLE IF NOT EXISTS bebidas
(
	id_bebida INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30)
);

INSERT INTO bebidas VALUES (null, 'Refrigerante');
INSERT INTO bebidas VALUES (null, 'Agua');
INSERT INTO bebidas VALUES (null, 'Cerveja');
INSERT INTO bebidas VALUES (null, 'Mate');
INSERT INTO bebidas VALUES (null, 'Caipirinha');
INSERT INTO bebidas VALUES (null, 'Suco');

CREATE TABLE IF NOT EXISTS comidas
(
	id_comida INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30),
    id_bebida INT UNSIGNED,
    FOREIGN KEY (id_bebida) REFERENCES bebidas(id_bebida)
);

INSERT INTO comidas VALUES (null, 'Hamburger', 1);
INSERT INTO comidas VALUES (null, 'Fruta', 2);
INSERT INTO comidas VALUES (null, 'Espetinho', 3);
INSERT INTO comidas VALUES (null, 'Bolo', null);
INSERT INTO comidas VALUES (null, 'Pastel', 6);
INSERT INTO comidas VALUES (null, 'Frango', 3);
INSERT INTO comidas VALUES (null, 'Macarrão', null);

SELECT * FROM comidas CROSS JOIN bebidas;

SELECT * FROM comidas c
INNER JOIN bebidas b
ON c.id_bebida = b.id_bebida;

SELECT * FROM comidas c
LEFT JOIN bebidas b
ON c.id_bebida = b.id_bebida;

SELECT * FROM comidas c
RIGHT JOIN bebidas b
ON c.id_bebida = b.id_bebida;
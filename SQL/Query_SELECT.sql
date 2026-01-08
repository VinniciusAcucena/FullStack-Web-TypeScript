INSERT INTO usuarios (nome, email, senha) 
	VALUES('Ana Silva', 'ana.silva@gmail.com', 'ana123'),
		('Carlos Souza', 'carlos.souza@mail.com', 'carl@2024'),
		('Mariana Lima', 'mariana.lima@out.com', 'mari789'),
		('João Pereira', 'joao.pereira@teste.com', 'jp2023'),
		('Lucas Rocha', 'lucas.rocha@email.com', 'lr987654');

SELECT * FROM usuarios;

SELECT * FROM usuarios
WHERE nome='José';

SELECT * FROM usuarios
WHERE email <> 'email2@email.com';

SELECT * FROM usuarios
WHERE nome LIKE 'J%';

SELECT * FROM usuarios
WHERE nome LIKE 'Ana%' AND senha='ana123';

SELECT * FROM usuarios
WHERE senha LIKE '%3%' OR nome='Mariana Lima';

SELECT * FROM usuarios
WHERE nome NOT IN('Ana', 'João');

SELECT * FROM usuarios
WHERE NOT email='V@email.com';

SELECT * FROM usuarios ORDER BY senha ASC;

SELECT * FROM usuarios ORDER BY nome DESC;

SELECT nome AS n FROM usuarios;
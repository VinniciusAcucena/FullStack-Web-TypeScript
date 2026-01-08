INSERT INTO usuarios (nome, email, senha)
	VALUES('Maria', 'M@email.com', '8662918'),
		('José', 'J@email.com', '9287421'),
        ('Ana', 'A@email.com', '18395'),
        ('Vinnicius', 'Email@email.com', '123456'),
		('João', 'email2@email.com', '12345678');
        
DELETE FROM usuarios
WHERE nome='Maria';
        
UPDATE usuarios SET
	email='V@email.com'
    WHERE nome='Vinnicius';
    
SELECT * FROM usuarios;
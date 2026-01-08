CREATE TABLE IF NOT EXISTS funcionarios
(
	id_funcionario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    sobrenome VARCHAR(100)
);

INSERT INTO funcionarios
	VALUES (null, 'Ana', 'Silva'),
		(null, 'Carlos', 'Souza'),
		(null, 'Mariana', 'Lima'),
		(null, 'João', 'Pereira'),
		(null, 'Lucas', 'Rocha'),
		(null, 'Fernanda', 'Alves'),
		(null, 'Rafael', 'Costa'),
		(null, 'Beatriz', 'Oliveira'),
		(null, 'Pedro', 'Martins'),
		(null, 'Juliana', 'Nogueira');
  
CREATE TABLE IF NOT EXISTS cargos
(
	id_cargo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50),
    salario DECIMAL(10,2)
);

INSERT INTO cargos
	VALUES (null, 'Auxiliar Administrativo', 1800.00),
		(null, 'Assistente Financeiro', 2200.00),
		(null, 'Analista de Sistemas', 4500.00),
		(null, 'Desenvolvedor Backend', 6500.00),
		(null, 'Desenvolvedor Frontend', 6200.00),
		(null, 'Coordenador de Projetos', 7800.00),
		(null, 'Gerente de TI', 9800.00),
		(null, 'Analista de Marketing', 4000.00),
		(null, 'Designer Gráfico', 3500.00),
		(null, 'Diretor Executivo', 15000.00);
        
CREATE TABLE IF NOT EXISTS salarios
(
	id_salario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_funcionario INT UNSIGNED NOT NULL UNIQUE KEY,
    id_cargo INT UNSIGNED NOT NULL,
    
    CONSTRAINT funcionarios_id_fk
    FOREIGN KEY(id_funcionario) REFERENCES funcionarios(id_funcionario),
    
    CONSTRAINT cargos_id_fk
    FOREIGN KEY(id_cargo) REFERENCES cargos(id_cargo)
);

INSERT INTO salarios
	VALUES(null, 1, 4),
		(null, 2, 2),
        (null, 3, 1),
        (null, 7, 2);

SELECT * FROM salarios
        
CREATE TABLE alterar
(
	titulo varchar(30) NOT NULL DEFAULT 'SEM TITULO',
    descricao TEXT NOT NULL,
    quantidade INT NOT NULL DEFAULT 0
);

INSERT INTO alterar(titulo, descricao)
	VALUES ('teste', 'descrição');
    
INSERT INTO alterar(descricao, quantidade)
	VALUES ('teste', 200);
    
ALTER TABLE alterar RENAME TO nome_alterado;

ALTER TABLE nome_alterado
 ADD COLUMN data_atual DATETIME AFTER titulo,
 ADD COLUMN qtd_dias INT NOT NULL DEFAULT 0 FIRST;

ALTER TABLE nome_alterado
 DROP COLUMN data_atual,
 DROP COLUMN qtd_dias;
 
ALTER TABLE nome_alterado
	CHANGE COLUMN data_atual dt_atual DATE NOT NULL;
    
ALTER TABLE nome_alterado
	MODIFY COLUMN qtd_dias FLOAT;
    
SELECT * FROM nome_alterado;

DROP TABLE alterar;

TRUNCATE TABLE nome_alterado;
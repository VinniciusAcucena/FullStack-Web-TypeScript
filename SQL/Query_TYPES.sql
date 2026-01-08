CREATE TABLE tipos 
(
	numero_tiny TinyInt,
    numero_small smallint,
    numero_int INT,
    numero_float FLOAT,
    numero_double DOUBLE,
    numero_decimal DECIMAL(10, 4),
    texto_char char(2),
    texto_varchar varchar(20),
    data_nascimento DATE,
    data_time DATETIME
);	

INSERT INTO tipos(numero_tiny, numero_small, numero_int, 
					numero_float, numero_double, numero_decimal,
                    texto_char, texto_varchar, data_nascimento, data_time)
	VALUES(127, 32767, 24354673, 
			123.45, 12345.1234, 123456.1234,
            'RJ', 'Vinnicius', '2000-01-12', '2026-01-01');
    
SELECT * FROM tipos;

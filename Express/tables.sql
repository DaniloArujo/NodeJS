--exemplos de códigos de bancode dados

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'Danilo Araujo Mota',
    'Daniloarar@gmail',
    8
);

UPDATE usuarios set idade = 29 where nome = "Danilo Araujo Mota";
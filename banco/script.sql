CREATE DATABASE sistema_escolar
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE sistema_escolar;


CREATE TABLE responsaveis (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(100),
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE alunos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    data_nascimento DATE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    responsavel_id INT UNSIGNED,
    ativo BOOLEAN DEFAULT TRUE,

    -- 🏠 ENDEREÇO COMPLETO
    endereco_rua VARCHAR(150),
    endereco_numero VARCHAR(10),
    endereco_bairro VARCHAR(100),
    endereco_cidade VARCHAR(100),
    endereco_estado CHAR(2),
    endereco_cep CHAR(8),

    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (responsavel_id)
        REFERENCES responsaveis(id)
        ON DELETE SET NULL
);

CREATE TABLE turmas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    ano_letivo YEAR NOT NULL,
    turno ENUM('Manhã','Tarde','Noite') DEFAULT 'Manhã'
);


CREATE TABLE aluno_turma (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT UNSIGNED NOT NULL,
    turma_id INT UNSIGNED NOT NULL,

    UNIQUE KEY uq_aluno_turma (aluno_id, turma_id),

    FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
    FOREIGN KEY (turma_id) REFERENCES turmas(id) ON DELETE CASCADE
);


CREATE TABLE professores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE materias (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT DEFAULT 0
);


CREATE TABLE frequencia (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT UNSIGNED NOT NULL,
    turma_id INT UNSIGNED NOT NULL,
    materia_id INT UNSIGNED NOT NULL,
    data_aula DATE NOT NULL,
    presente BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
    FOREIGN KEY (turma_id) REFERENCES turmas(id) ON DELETE CASCADE,
    FOREIGN KEY (materia_id) REFERENCES materias(id) ON DELETE CASCADE
);

CREATE TABLE notas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT UNSIGNED NOT NULL,
    materia_id INT UNSIGNED NOT NULL,
    bimestre TINYINT NOT NULL,
    nota DECIMAL(4,2) NOT NULL,

    FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
    FOREIGN KEY (materia_id) REFERENCES materias(id) ON DELETE CASCADE
);


CREATE TABLE historico_escolar (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT UNSIGNED NOT NULL,
    ano_letivo YEAR NOT NULL,
    resultado ENUM('Aprovado','Reprovado','Em Andamento') DEFAULT 'Em Andamento',

    FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE
);

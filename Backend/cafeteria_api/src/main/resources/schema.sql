CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome_produto VARCHAR(45) NOT NULL,
  categoria VARCHAR(45) NOT NULL,
  descricao VARCHAR(150) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  tamanho INT NOT NULL,
  ingredientes VARCHAR(255) NOT NULL,
  dados_imagem BLOB NOT NULL
);
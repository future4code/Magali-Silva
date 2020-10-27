# Semana 16 - Aula 44: 
### Exercício 1:
a) Explique os demais comandos que estão nessa query.
- VARCHAR (n): permite dados do tipo string, onde o comprimento máximo permitido é definido pelo "(n)". Nessa query temos a coluna *id* que aceita strings de até 255 caracteres e na coluna *gender* que aceita até 6 caracteres;
- PRIMARY KEY: define que o dado será único, não permite receber valores nulos;
- NOT NULL: não permite que o dado receba valor nulo;
- DATE: permite dados do tipo data, (YYYY-MM-DD).

b) Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
- SHOW DATABASES: monstrou os bancos de dados disponíveis;
- SHOW TABLES: mostrou as tabelas disponíveis, no caso apenas a tabela de atores;

c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
- DESCRIBE: Mostra as características da tabela, indicando para cada coluna o tipo, se pode ou não ser nulo, o tipo de chave, o valor padrão atribuído caso não exista um valor.

### Exercício 2:
a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
~~~

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

*Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'*
O erro indica que o valor passado ao *id* já existe e isso não é permitido, visto que é do tipo *primary key* e deve possuir valor único.

c) *Error Code: 1136. Column count doesn't match value count at row*
Ocorre porque a quantidade de colunas passadas no comando de inserir é diferente da quantidade de colunas enviadas.

d) *Error Code: 1364. Field 'name' doesn't have a default value*
Ocorre porque não foi passado valor ao campo *name* e este foi Error Code: 1364. Field 'name' doesn't have a default value sem valor padrão, além não permitir valor nulo.

e) *Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row*
Ocorre porque o valor referente a data de aniversário foi passado sem as aspas necessárias a valores do tipo string.

f) ok

### Exercício 3:

a) 
~~~SQL
SELECT * from Actor WHERE gender = "female";
~~~

b)
~~~SQL
SELECT salary from Actor WHERE name = "Tony Ramos";
~~~

c) ???
~~~SQL
SELECT gender="invalid" from Actor;
~~~

d)
~~~SQL
SELECT id, name, salary from Actor WHERE salary <= 500000;
~~~

e)
~~~SQL
SELECT id, nome from Actor WHERE id = "002"
~~~
*Error Code: 1054. Unknown column 'nome' in 'field list'*
Ocorre porque o nome correto da coluna é *name*. 
O certo seria:
~~~SQL
SELECT id, name from Actor WHERE id = "002";
~~~

### Exercício 4:
a) Explique com as suas palavras a query acima
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
~~~

A query verifica, primeiramente, quais atores possuem nome que inicia com A ou J e, dentre esses, retorna aqueles que possuem salário superior á R$300.000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
~~~SQL
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
~~~

C) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
~~~SQL
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
~~~

d) Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
~~~

### Exercício 5:
a)
~~~SQL
CREATE TABLE Movies (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL, 
  sinopse TEXT NOT NULL,
  release_data DATE NOT NULL,
  evaluation TINYINT NOT NULL
);
~~~

b)
~~~SQL
INSERT INTO Movies (id, name, sinopse, release_data, evaluation)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
~~~

c)
~~~SQL
INSERT INTO Movies (id, name, sinopse, release_data, evaluation)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
~~~

d)
~~~SQL
INSERT INTO Movies (id, name, sinopse, release_data, evaluation)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
~~~

e)
~~~SQL
INSERT INTO Movies (id, name, sinopse, release_data, evaluation)
VALUES(
	"004",
  "Deus é Brasileiro",
  "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
  "2003-01-31",
  9
);
~~~

### Exercício 6:
a) Retorne o id, título e avaliação a partir de um id específico;
~~~SQL
SELECT id, name, evaluation FROM Movies WHERE id="001";
~~~


b) Retorne um filme a partir de um nome específico;
~~~SQL
SELECT * FROM Movies WHERE name = "Se Eu Fosse Você";
~~~


c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
~~~SQL
SELECT id, name, sinopse FROM Movies WHERE evaluation >=7;
~~~


### Exercício 7:
a) Retorna um filme cujo título contenha a palavra `vida`
~~~SQL
SELECT * FROM Movies WHERE name LIKE "%vida%";
~~~


b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
~~~SQL
SELECT * FROM Movies WHERE name LIKE "%ss%" OR sinopse LIKE "%ss%";
~~~


c) Procure por todos os filmes que já tenham lançado
~~~SQL
SELECT * FROM Movies WHERE release_data < "2020-10-26";
~~~

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
~~~SQL
SELECT * FROM Movies WHERE release_data < "2020-10-26" AND (name LIKE "%ss%" OR sinopse LIKE "%ss%") AND evaluation > 7;
~~~
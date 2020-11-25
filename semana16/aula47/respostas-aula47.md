# Semana 16 - Aula 47: Relações em SQL

### Exercícios 1:

a. Explique o que é uma chave estrangeira

É o que relaciona duas tabelas, sempre referenciando uma *primary key* da outra tabela.


b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
~~~SQL
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)
~~~
~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"a",
    "Muito bom!",
    7,
	"001"
);
~~~
~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"b",
    "Ótimo filme!",
    8,
	"003"
);
~~~
~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"c",
    "Filme maravilhoso!",
    10,
	"002"
);
~~~

c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"d",
    "Filme horrível!",
    0,
	"007"
);
~~~
Retorna erro pois não é possível adicionar ou atualizar um item filho sem um item pai.

*Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails*



d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
~~~SQL
ALTER TABLE Movies DROP COLUMN rating;
~~~

e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
~~~SQL
DELETE FROM Movies WHERE id = "003";
~~~
*Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails*




### Exercícios 2:
a. Explique, com as suas palavras, essa tabela
~~~SQL
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~

É uma tabela que, por conter o elenco do filme, se relaciona com outras duas tabelas, a tabela *Movies* e *Actor*, através dos ids.


b. Crie, ao menos, 6 relações nessa tabela
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "001", "002");
~~~
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "001", "010");
~~~
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "002", "001");
~~~
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "002", "004");
~~~
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "003", "005");
~~~
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "003", "010");
~~~


c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES( "003", "020");
~~~
*Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails*

Retorna erro pois não é possível atualizar um item filho sem que exista um item pai. 


d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
~~~SQL
DELETE FROM Actor WHERE id = "004";
~~~
*Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails*

Retorna erro pois não é possível atualizar um item pai quando este possui item filho dependente. 



### Exercícios 3:
a. Explique, com suas palavras, a query acima. O que é o operador ON? 
~~~SQL
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
~~~

A quary acima seleciona, através da chave estrangeita e dos ids, os filmes dá tabela *Movies* que já foram avaliados na tabela *Rating*. O *ON* é uma condição, indicando que os ids devem ser iguais.

b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
~~~SQL
SELECT Movies.name, Movies.id, rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
~~~



### Exercícios 4:
a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário
~~~SQL

~~~


b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator
~~~SQL

~~~


c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)
~~~SQL

~~~




### Exercícios 5:
a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?
~~~SQL

~~~


b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query
~~~SQL

~~~


c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.
~~~SQL

~~~


d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)
~~~SQL

~~~




### Exercícios 6:
a. Que tipo de relação é essa?
~~~SQL

~~~


b. Explicite a query que você usou para criar a tabela
~~~SQL

~~~


c. Crie ao menos 2 óscar para cada um dos filmes
~~~SQL

~~~


d. Faça uma query que retorne todos os filmes e seus respectivos óscar
~~~SQL

~~~





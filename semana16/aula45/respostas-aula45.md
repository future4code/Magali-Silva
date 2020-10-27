# Semana 16 - Aula 45: 
### Exercício 1:
a) Leia os comandos abaixo e indique o que eles fazem. 
~~~SQL
ALTER TABLE Actor DROP COLUMN salary;
~~~
Se executado, alteraria a tabela ao remover a coluna *salary*.


b) Leia os comandos abaixo e indique o que eles fazem. 
~~~SQL
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~
Se executado, alteraria a tabela ao redefinir a coluna *gender*. Esta passaria a se chamar *sex*. Já o tipo da coluna seria mantido.

c) Leia os comandos abaixo e indique o que eles fazem. 
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~
Se executado, alteraria a tabela ao redefinir a coluna *gender*. Esta passaria a ter tipo *varchar* com permissão de até *255* caracteres. O nome da coluna seria mantido.

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~



### Exercício 2:
a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
~~~SQL
UPDATE Actor
SET name="Fe Montenegro", birth_date="1992-10-19"
WHERE id="003";
~~~
~~~SQL
UPDATE Actor
SET name="Fernanda Montenegro", birth_date="1929-10-19"
WHERE id="003";
~~~

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES. Então, escreva outra query para voltar ao nome anterior.
~~~SQL
UPDATE Actor
SET name="JULIANA PÃES"
WHERE id="005";
~~~
~~~SQL
UPDATE Actor
SET name="Juliana Paes"
WHERE id="005";
~~~

c) Escreva uma query que atualize todas as informações do ator com o id 005
~~~SQL
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
WHERE id = "005";
~~~

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
~~~SQL
UPDATE Actor
SET name="Juliana Paes"
WHERE id="006";
~~~

*0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.015 sec*

Aparentemente aceita a modificação, mas não faz alterações visto que o id não existia. 



### Exercício 3:
a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
~~~SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
~~~

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
~~~SQL
DELETE FROM Actor WHERE gender="male" AND salary > 1000000;
~~~



### Exercício 4:
a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

b) Escreva uma query que pegue o menor salário das atrizes
~~~SQL
SELECT MIN(salary) FROM Actor;
~~~

c)  Escreva uma query que pegue a quantidade de atrizes
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender="female";
~~~

d) Escreva uma query que pegue a soma de todos os salários
~~~SQL
SELECT SUM(salary) FROM Actor;
~~~



### Exercício 5:
a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
~~~SQL
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
~~~
A query retorna a quantidade de cada tipo de genero que consta na coluna *gender*.


b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
~~~SQL
SELECT id, name FROM Actor ORDER BY name DESC;
~~~

c)  Faça uma query que retorne todos os atores ordenados pelo salário
~~~SQL
SELECT * FROM Actor ORDER BY salary ASC;
~~~

d) Faça uma query que retorne os atores com os três maiores salarios
~~~SQL
SELECT * FROM Actor ORDER BY salary DESC
LIMIT 3;
~~~

e) Faça uma query que retorne a média de salário por gênero
~~~SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~



### Exercício 6:
a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
~~~SQL
ALTER TABLE Movies ADD playing_limit_date DATE;
~~~

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
~~~SQL
ALTER TABLE Movies CHANGE rating rating FLOAT;
~~~

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
~~~SQL
UPDATE Movies
SET playing_limit_date = "2020-12-01"
WHERE id = "001";
~~~
~~~SQL
UPDATE Movies
SET playing_limit_date = "2020-02-02"
WHERE id = "002";
~~~

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
~~~SQL
DELETE FROM Movies WHERE id = "004"
~~~
~~~SQL
UPDATE Movies
SET synopsis = "Sinopse de teste"
WHERE id = "004";
~~~
*0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*

Aparentemente aceita a modificação, mas não faz alterações visto que o id não existe mais. 



### Exercício 7:
a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5? 
~~~SQL
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
~~~

b) Qual a média das avaliações dos filmes?
~~~SQL
SELECT AVG(rating) FROM Movies;
~~~

c) Qual a quantidade de filmes em cartaz? 
~~~SQL
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
~~~

d) Qual a quantidade de filmes que ainda irão lançar?
~~~SQL
SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();
~~~

e) Qual a maior nota dos filmes?
~~~SQL
SELECT MAX(rating) FROM Movies;
~~~

f) Qual a menor nota dos filmes?
~~~SQL
SELECT MIN(rating) FROM Movies;
~~~




### Exercício 8:
a) Retorne todos os filmes em ordem alfabética
~~~SQL
SELECT * FROM Movies ORDER BY name ASC;
~~~

b) Retorne os 5 primerios filmes em ordem descrente alfabética 
~~~SQL
SELECT * FROM Movies ORDER BY name DESC
LIMIT 5;
~~~

c) Retorne os 3 filmes mais recentes em cartaz
~~~SQL
SELECT * FROM Movies 
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
~~~

d) Retorne os 3 filmes melhor avalidos
~~~SQL
SELECT * FROM Movies ORDER BY rating DESC
LIMIT 3;
~~~
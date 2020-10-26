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
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

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
```
SELECT * from Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) ???
```
SELECT gender="invalid" from Actor;
```

d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e) ??
```
SELECT id, nome from Actor WHERE id = "002"
```
*Error Code: 1054. Unknown column 'nome' in 'field list'*


### Semana 18 - Aula 50: Introdução a Autenticação

# Exercício 1:
a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

Concordo, pois strings permitem uma quantidade infinita de combinações, tornando o id mais consistente e seguro.



b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
```
import {v4} from 'uuid'

export function generateId(): string {
    return v4()
}
```





# Exercício 2:
```
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
a. Explique o código acima com as suas palavras.

Na constante *connection* é criada a conexão com o banco de dados e a função da constante *createUser* insere um usuário na tabela userTableNmae.


b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
~~~SQL
CREATE TABLE aula50_users(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
~~~


c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.



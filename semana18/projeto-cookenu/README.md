~~~SQL
CREATE TABLE cookenu_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
~~~

~~~SQL
CREATE TABLE cookenu_recipes(
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(1044) NOT NULL,
    createdAt DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);
~~~
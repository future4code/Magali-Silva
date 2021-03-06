# Semana 18 - Aula 51: Criptografia e User Roles
### Exercício 1:
*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

O `round` é a forma como a lib chama o cost. 

O `salt` é uma string aleatória gerada pelo algoritmo antes de criar o hash.

Recomenda-se utilizar para o `round` o maior valor possível, de forma que o equipamento utilizado rode no tempo desejado.
Para o exercício usarei 12.


*b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.* 
```
export const hash = async (plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    return bcrypt.hash(plainText, salt)
}

```


*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*
```
export const compare = async (plainText: string, cypherText: string): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText)
}
```

### Exercício 2:
*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
O cadastro porque é preciso que a senha cadastrada seja criptografada e salva no banco. Só depois disso o login poderá comparar a senha digitada e criptografada com a senha salva no banco.

*b. Faça a alteração do primeiro endpoint*
```
export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        let message = 'User created and token generated by jwt'

        if (!email || !password) {
            res.statusCode = 406
            message = 'Missing "email" and/or "password"'
            throw new Error(message)
        }

        if (!email.includes('@')) {
            message = 'missing "@" in the email'
            throw new Error(message)
        }

        if (password.length < 6) {
            message = 'Password must be at least 6 characters'
            throw new Error(message)
        }

        const id: string = generateId()
        const cypherPassword: string = await hash(password)

        await insertUser(id, email, cypherPassword)

        const token: string = generateToken({
            id
        })
        res.status(200).send({ message: message,
        token: token })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```


*c. Faça a alteração do segundo endpoint*
```
export const login = async (req: Request, res: Response) => {
    try {
        
        const {email, password} = req.body
        let message: string = 'user is loged and token generated by jwt'

        if (!email || !password) {
            res.statusCode = 406
            message = 'Missing "email" and/or "password"'
            throw new Error(message)
        }

        if (!email.includes('@')) {
            message = 'missing "@" in the email'
            throw new Error(message)
        }

        const user: User | undefined = await selectUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }
        
        const token: string = generateToken({
            id: user.id
        })

        res.status(200).send({ message: message,
        token: token })
        
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

Não é preciso modificar. 
Seria preciso modificar se o endpoint fosse restristo a admin, nesse caso seria necessário adicionar o `role` para validação do usuário.

### Exercício 3:
*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
~~~SQL
ALTER TABLE aula50_users
ADD role ENUM('NORMAL', 'ADMIN') DEFAULT 'NORMAL';
~~~

*b. Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
```
export type AuthenticationData = {
    id: string,
    role: USER_ROLES
}
```
```
export const getTokenData = (
    token: string
): AuthenticationData => {
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
    return {
        id: payload.id,
        role: payload.role
    }
}
```

*c. Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
```
export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password, role } = req.body
        let message = 'User created and token generated by jwt'

        if (!email || !password) {
            res.statusCode = 406
            message = 'Missing "email" and/or "password"'
            throw new Error(message)
        }

        if (!email.includes('@')) {
            message = 'missing "@" in the email'
            throw new Error(message)
        }

        if (password.length < 6) {
            message = 'Password must be at least 6 characters'
            throw new Error(message)
        }

        const id: string = generateId()
        const cypherPassword: string = await hash(password)

        await insertUser(id, email, cypherPassword, role)

        const token: string = generateToken({
            id,
            role
        })
        
        res.status(200).send({ message: message,
        token: token })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```

*d. Altere o login para criar o token com o `role` do usuário*
```
export const login = async (req: Request, res: Response) => {
    try {
        
        const {email, password, role} = req.body
        let message: string = 'user is loged and token generated by jwt'

        if (!email || !password) {
            res.statusCode = 406
            message = 'Missing "email" and/or "password"'
            throw new Error(message)
        }

        if (!email.includes('@')) {
            message = 'missing "@" in the email'
            throw new Error(message)
        }

        const user: User | undefined = await selectUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }
        
        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({ message: message,
        token: token })
        
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```


### Exercício 4:
*Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint.* 

*a. Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*
```
export const getProfile = async (req: Request, res: Response) => {
    try {
        let message: string = 'user found'

        const token = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        console.log(tokenData)
        if (tokenData.role !== USER_ROLES.NORMAL) {
            message = 'only "NORMAL" user can access functionality'
            throw new Error(message)
        }

        const user = await selectUserById(tokenData.id)

        if (!user) {
            res.statusCode = 404
            message = 'user not found'
            throw new Error(message)
        }
        
        res.status(200).send({ 
            message,
            id: user.id,
            email: user.email,
            role: user.role
        })

    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```

### Exercício 5:
*Implemente o endpoint que realizará a deleção de um usuário.*
```
export async function removeUser(
    id: string
): Promise<any> {
    try {
        await connection('aula50_users')
        .delete()
        .where("id", id);
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};
```
```
export const deleteUser = async (req: Request, res: Response) => {
    try {
        let message: string = 'user deleted'

        const token = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        const id: string = req.params.id as string

        if (tokenData.role !== USER_ROLES.ADMIN) {
            message = 'only "ADMIN" user can access functionality'
            throw new Error(message)
        }

        await removeUser(id)
        
        res.status(200).send({ 
            message
        })

    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```


### Exercício 6:
*Implemente o endpoint que retorne as informações (id e email) de um usuário a partir do seu id.*
```
export const getUser = async (req: Request, res: Response) => {
    try {
        let message: string = 'user found'

        const token = req.headers.authorization as string

        getTokenData(token)
        
        const id: string = req.params.id as string

        const user = await selectUserById(id)

        if (!user) {
            res.statusCode = 404
            message = 'user not found'
            throw new Error(message)
        }
        
        res.status(200).send({ 
            message: {
                id: user.id,
                email: user.email
            }
        })

    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}
```
// // EXERCÍCIO 1
// // a) 
// const minhaString: string = 0

// // Retorna erro idicando que o valor atribuído não corresponde tipo


// // b)
// const meuNumero: number | string = 0
// // Para que também aceite strings, é necessário definir o tipo da variável como number ou string.


// // c)
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const primeiraPessoa: pessoa = {
//     nome: "Magali",
//     idade: 25,
//     corFavorita: "verde"
// }


// // d)
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const segundaPessoa: pessoa = {
//     nome: "Bea",
//     idade: 49,
//     corFavorita: "branco"
// }

// const terceiraPessoa: pessoa = {
//     nome: "Junior",
//     idade: 7,
//     corFavorita: "azul"
// }

// const quartaPessoa: pessoa = {
//     nome: "Juçara",
//     idade: 41,
//     corFavorita: "rosa"
// }

// e)

enum ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    ROXO = "Roxo"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: ARCO_IRIS
}

const primeiraPessoa: pessoa = {
    nome: "Magali",
    idade: 25,
    corFavorita: ARCO_IRIS.VERDE
}
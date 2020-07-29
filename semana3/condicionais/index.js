/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */
/* 1 */ 
// O código pede para o usuário digitar um número e o armazena em uma variável do tipo string.
// Em seguida, em outra variável, transforma a string em um número.
// O valor, agora numérico, passa por uma condicional, onde:
// Se o resto da divisão do valor por 2 for igual a 0, imprime na tela "Passou no teste."
// Se não, imprime na tela "Não passou no teste."
// Ou seja, passarão no teste os números que forem par e será impressa a mensagem "Passou no teste.", enquanto os números ímpares cairão no else e será impressa a mensagem "Não passou no teste.".

/* 2 */ 
// a. Serve para pedir ao usuário qual fruta ele deseja e mostrar a ele o preço da fruta desejada.
// b. O preço da fruta Maça é R$ 2.25
// c. Será impresso na tela:
// O preço da fruta Pêra é R$ 5

/* 3 */ 
// a. A primeira linha está pedindo para o usuário digitar um número (sendo esse valor do tipo string), transformando a string em número e armazenando esse valor em uma variável.
// b. Se o usuário digitar o número 10, será impresso "Esse número passou no teste". Se digitar -10, acredito que não aparecerá nada, visto que não há um else com console e mensagem. Acho que nas duas situações aparecerá um erro devido ao "console.log(mensagem)", dizendo que a "mensagem" não foi definida, já que trata-se de uma variável fora do escopo do bloco pai e, por cosequência, ele não tem acesso a esse valor.
// c. Sim, haverá erro dizendo que a variável não foi definida devido ao "console.log(mensagem)" que está dentro do escopo do bloco pai. Isso acontencerá porque a variável em questão é definida dentro do escopo do bloco filho e o pai não tem acesso as informações do escopo do bloco filho.


/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */
/* 4 */
// let idade = Number(prompt("Qual a sua idade?"))

// if (idade > 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }

/* 5 */
// let turnoAula = prompt("Digite o turno do dia que você estuda, sendo M para matutino, V para vespertino ou N para Noturno:")

// if (turnoAula === "M") {
//     console.log("Bom Dia!")
// } else if (turnoAula === "V") {
//     console.log("Boa Tarde!")
// } else if (turnoAula === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Digite um valor válido.")
// }

/* 6 */
// let turnoAula = prompt("Digite o turno do dia que você estuda, sendo M para matutino, V para vespertino ou N para Noturno:")

// switch (turnoAula) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Digite um turno válido (M, V ou N).")
//         break
// }

/* 7 */
// let genero = prompt("Qual o gênero do filme?")
// let valorIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (genero === "fantasia" && valorIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


/* DESAFIOS */
/* 1 */
// let genero = prompt("Qual o gênero do filme?")
// let valorIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (genero === "fantasia" && valorIngresso < 15) {
//     let snack = prompt("Qual snack que você quer comprar?")
//     console.log("Bom filme!")
//     console.log("... com", snack)
// } else {
//     console.log("Escolha outro filme :(")
// }

/* 2 */
let nome = prompt("Digite seu nome completo:")
let tipoJogo = prompt("Digite o tipo de jogo, onde IN indica internacional e DO indica doméstico:")
let etapaJogo = prompt("Digite a etapa do jogo, onde SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final:")
let categoriaJogo = Number(prompt("Digite a categoria (1, 2, 3 ou 4):"))
let quantidadeDeIngresso = Number(prompt("Digite a quantidade de ingressos:"))


if (tipoJogo === "IN") {
    if (etapaJogo === "SF") {
        if (categoriaJogo === 1) {
            let valorIngresso = 1320/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 2) {
            let valorIngresso = 880/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 3) {
            let valorIngresso = 550/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 4) {
            let valorIngresso = 220/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else {
            console.log("Digite uma categoria de jogo válida (1, 2, 3 ou 4).")
        }

    } else if (etapaJogo === "DT") {
        if (categoriaJogo === 1) {
            let valorIngresso = 660/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 2) {
            let valorIngresso = 440/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 3) {
            let valorIngresso = 330/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 4) {
            let valorIngresso = 170/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else {
            console.log("Digite uma categoria de jogo válida (1, 2, 3 ou 4).")
        }

    } else if (etapaJogo === "FI") {
        if (categoriaJogo === 1) {
            let valorIngresso = 1980/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 2) {
            let valorIngresso = 1320/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 3) {
            let valorIngresso = 880/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else if (categoriaJogo === 4) {
            let valorIngresso = 330/4.1
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Internacional")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: U$", valorIngresso)
            console.log("Valor total: U$", valorTotal)

        } else {
            console.log("Digite uma categoria de jogo válida (1, 2, 3 ou 4).")
        }

    } else {
        console.log("Digite uma etapa de jogo válida (SF, DT ou FI).")
    }

} else if (tipoJogo === "DO") {
    if (etapaJogo === "SF") {
        if (categoriaJogo === 1) {
            let valorIngresso = 1320
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 2) {
            let valorIngresso = 880
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 3) {
            let valorIngresso = 550
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 4) {
            let valorIngresso = 220
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Semi-final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else {
            console.log("Digite uma categoria de jogo válida (1, 2, 3 ou 4).")
        }

    } else if (etapaJogo === "DT") {
        if (categoriaJogo === 1) {
            let valorIngresso = 660
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 2) {
            let valorIngresso = 440
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 3) {
            let valorIngresso = 330
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 4) {
            let valorIngresso = 170
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Decisão de terceiro lugar")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else {
            console.log("Digite uma categoria de jogo válida (1, 2, 3 ou 4).")
        }

    } else if (etapaJogo === "FI") {
        if (categoriaJogo === 1) {
            let valorIngresso = 1980
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 2) {
            let valorIngresso = 1320
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 3) {
            let valorIngresso = 880
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else if (categoriaJogo === 4) {
            let valorIngresso = 330
            let valorTotal = quantidadeDeIngresso * valorIngresso
            console.log("---Dados da compra---")
            console.log("Nome do cliente:", nome)
            console.log("Tipo de jogo:", tipoJogo, "- Doméstico")
            console.log("Etapa do jogo:", etapaJogo, "- Final")
            console.log("Categoria:", categoriaJogo)
            console.log("Quantidade de Ingressos:", quantidadeDeIngresso, "ingressos")
            console.log("---Valores---")
            console.log("Valor do ingresso: R$", valorIngresso)
            console.log("Valor total: R$", valorTotal)

        } else {
            console.log("Digite uma categoria de jogo válida (1, 2, 3 ou 4).")
        }

    } else {
        console.log("Digite uma etapa de jogo válida (SF, DT ou FI).")
    }

} else {
    console.log("Digite um tipo de jogo válido (IN ou DO).")
}

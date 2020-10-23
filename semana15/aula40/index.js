// EXERCÍCIO 1:
// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// console.log(`Olá ${nome}! Você tem ${idade} anos.`)

// // c) Altere o progama acima para que mostre também a sua idade daqui a seta anos.

// const aumentaIdade = Number(process.argv[4])

// console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${(idade+aumentaIdade)} anos.`)

// EXERCÍCIO 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operacao = process.argv[2]
// const primeiroNumero = Number(process.argv[3])
// const segundoNumero = Number(process.argv[4])

// let resposta = 0

// switch (operacao) {
//     case "soma":
//         resposta = primeiroNumero+segundoNumero
//         break;
//     case "sub":
//         resposta = primeiroNumero-segundoNumero
//         break;
//     case "div":
//         resposta = primeiroNumero/segundoNumero
//         break;
//     case "mult":
//         resposta = primeiroNumero*segundoNumero
//         break;
//     default:
//         break;
// }

// console.log(`Resposta: ${resposta}`)

// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const lista = ["Correr", "Lavar louça"]
const tarefa = process.argv[2]

const adicionaTarefa = (novaTarefa) => {
    lista.push(novaTarefa)

    console.log(`Tarefa adicionada com sucesso!`)
    console.log(`Tarefas: ${lista}`)
}

adicionaTarefa(tarefa)



/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */

/* 1 */
// a. false
// b. false
// c. true
//e. boolean


/* 2 */
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9





/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */

/* 1 */
// let idade = prompt("Qual a sua idade?")
// let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

// let maiorQue = Number(idade) > Number(idadeMelhorAmigo)

// console.log("Sua idade é maior do que a do seu melhor amigo?", maiorQue)

// let diferenca = Number(idade) - Number(idadeMelhorAmigo)

// console.log("Diferença de idade:", diferenca)



/* 2 */
// let numeroPar = prompt("Insira um número par:")
// let resposta1 = Number(numeroPar)

// console.log(resposta1%2)
// // o resto da divisão de números pares sempre será 0
// // o resto da divisão de números ímpares sempre será 1



/* 3 */
// let listaDeTarefas = []

// let tarefa1 = prompt("Insira a 1ª tarefa que você precisa realizar hoje:")
// listaDeTarefas.push(tarefa1)
// let tarefa2 = prompt("Insira a 2ª tarefa que você precisa realizar hoje:")
// listaDeTarefas.push(tarefa2)
// let tarefa3 = prompt("Insira a 3ª tarefa que você precisa realizar hoje:")
// listaDeTarefas.push(tarefa3)

// console.log(listaDeTarefas)

// let tarefaRealizada = prompt("Insira o índice da tarefa que você já realizou:")
// let tarefaRealizadaNumero = Number(tarefaRealizada)

// listaDeTarefas.splice(tarefaRealizada, 1)
// console.log(listaDeTarefas)



/* 4 */
// const nomeDoUsuario = prompt("Qual o seu nome?")
// const emailDoUsuario = prompt("Qual o seu e-mail?")

// console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")



/* DASAFIOS EXTRAS */

/* 1a */
// let grauF = 77
// let grauK = (grauF - 32)*5/9 + 273.15
// console.log(grauK+"K") //298.15K

/* 1b */
// let grauC = 80
// let grauF = (grauC)*9/5 + 32
// console.log(grauF+"°F") //176°F

/* 1c */
// let grauC = 30
// let grauF = (grauC)*9/5 + 32
// let grauK = (grauF - 32)*5/9 + 273.15
// console.log(grauF+"°F e "+grauK+"K") //86°F e 303.15K

/* 1c */
let grauC = prompt("Para converter de Graus Celsius para Fahrenheit e Kelvin, insira o valor:")
let grauCNumber = Number(grauC)
let grauF = (grauCNumber)*9/5 + 32
let grauK = (grauF - 32)*5/9 + 273.15
console.log(grauF+"°F e "+grauK+"K") //86°F e 303.15K



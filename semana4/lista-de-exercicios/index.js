// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1
// A função conversorDeMoeda recebe como parametro um valor numérico 
// e, ao ser chamada, pede ao usuário que insira o valor da cotação do
//  dólar e transforma essa entrada, que é string, em número. 
// Em seguida retorna a string "R$" adicionada ao resultado da multiplicação 
// do parametro com o valor da cotação inserida pelo usuário.
// A constante meuDinheiro chama a função e passa o parametro 100.
// Considerando que o usuário informe 5 como cotação, será impresso no console:
// R$500


// 2
// A função recebe dois parametros, uma string referente ao 
// tipo de investimento e um número referente ao valor.
// Ao ser chamada ela cria uma variável que armazenará o valor
// total que será calculado e faz uma condicional para analisar a
// ação que será tomada de acordo com o tipo de investimento informado.
// Dentro de cada condicional é feita a multiplicação do valor de entrada
// pelo valor referente a cada tipo de investimento e esse resultado é armazenado
// na variável criada anteriormente. No final, a função retorna essa variável.
// Em seguida temos a definição de duas variáveis, estas chamam a função e passam
// seus paramentros e, após, pede-se que as duas variáveis sejam impressas na tela.
// Será impresso: 
// 165 
// TIPO DE INVESTIMENTO INFORMADO INCORRETO!


// 3
// Difiniu-se três constantes. A de nome "numeros" guarda um array de números. 
// As outras guardam arrays vazios.
// Então temos uma estrutura de repetição que guarda uma condicional.
// A condicional diz o seguinte:
// Se o número que passar por ela for par, ele será adicionado no array1.
// Se não, será adicionado no array2.
// Em seguida será impresso na tela a quantidade total de numeros do array
// numeros, o array1 e arra2
// Logo, será impresso:
// 14
// [12, 64, 44, 84, 48, 14]
// [25, 55, 121, 11, 51, 73, 11, 283]


// 4
// Difiniu-se uma constante e duas variáveis. A constante numeros guarda um 
// array de números. A variável numero1 guarda Infinity e a numero2 guarda 0.
// Novamente temos um laço com duas condições. 
// Se o número que passar for menor que infinito, o valor será armazenado em 
// numero1. Ou sejá, ela armazenará o menor número contido no array.
// Se o número que passar for maior que o valor armazenado em numero2 (no primeiro
// ciclo será 0), o número será armazenado em número2.
// Por último, as duas variáveis são impressas no console.
// Logo, será impresso:
// -10
// 1590





// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

// 1
// // for
// const numeros = [1, 2, 3, 4, 5]
// let posicaoPares = []
// let posicaoImpares = []

// for (let i = 0; i < numeros.length; i++) {
//     if (i %2 === 0) {
//         posicaoPares.push(i)
//     } else {
//         posicaoImpares.push(i)
//     }  
// }

// console.log(posicaoPares)
// console.log(posicaoImpares)

// // for of
// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     if (numero % 2 === 0) {
//         console.log(`O número ${numero} é par.`)
//     } else {
//         console.log(`O número ${numero} é ímpar.`)
//     }
// }


// // forEach
// const numeros = [1, 2, 3, 4, 5]
// let array1 = []
// let array2 = []

// numeros.forEach(numero => {
//     if (numero %2 === 0) {
//         array1.push(numero+10)
//     } else {
//         array2.push(numero)
//     } 
// })

// console.log(array1)
// console.log(array2)





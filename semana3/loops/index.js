/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO */
/* 1 */ 
// O código está executando uma estrutura de repetição, onde
// o valor da variável "valor" será atualizado através da
// soma de seu próprio valor com o valor do i. 
// Isso acontecerá enquanto i possuir valor menor que 5.
// Quanto i for igual a 5, a repetição terminará e será impresso 
// no console o valor final da variável "valor", neste caso 10.


/* 2 */
// a. Serão impressos todos os valores do array "lista" que forem maiores que 18.
// b. Eu achava que não era o suficiente, mas depois do pantão e da explicação do 
// Severo percebi ser possível. Para tal é necessário criar uma variável 
// representado o índice e, sabendo que o laço será repetido tantas vezes 
// quanto o tamanho do array, deve-se incrementar essa variável 
// em 1 unidade APÓS a impressão do número e seu respectivo índice. Tal como:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
//     if (numero > 18) {
// 	    console.log(numero, i)
//     }
//     i = i + 1  //ou i += 2
//     //O incremendo do índice deve ser feito depois da impressão do número e do índice. Pq? 
//     //Pq a contagem das posições dentro do array começa em zero, logo, se o incremento 
//     //for feito antes, a impressão do índice estará errada pq o valor será 
//     //1 unidade maior (ex.: o índice 0 apareceria como 1).
// }




/* EXERCÍCIO DE ESCRITA DE CÓDIGO */
/* 3 */
// a.
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i])  
// }
// OU
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of arrayOriginal) {
//     console.log(numero)  
// }


// b.
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i]/10)  
// }
// OU
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of arrayOriginal) {
//     console.log(numero/10)  
// }


// c.
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayPares = []
// for (let numero of arrayOriginal) {
//     if (numero%2 === 0) {
//         arrayPares.push(numero)
//     } 
// }
// console.log(arrayPares)


// d.
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayDeStrings = []

// for (let i = 0; i < arrayOriginal.length; i++) {
//     arrayDeStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
// }
    
// console.log(arrayDeStrings)


// e
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMinimo = +Infinity
let valorMaximo = -Infinity
let numero

for (let i = 0; i < arrayOriginal.length; i++) {
    numero = arrayOriginal[i]

    if (valorMinimo > numero) {
        valorMinimo = numero
    } else if (valorMaximo < numero) {
        valorMaximo = numero
    }  
}

console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

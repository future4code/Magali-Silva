/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */
/* 1 */
// a. 10 e 50
// b. não aparecerá nada no console


/* 2 */
// a. Darvas e Goli
// b. Apareceria Amanda e Caio


/* 3 */
// É uma função que recebe um array, verifica quais elementos 
// desse array são pares e cria um array com a potência dos
//  numeros pares. Nome: criaArrayDePotenciasDosNumerosPares


/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */
/* 4 */
// a.
// function informaSobreMim() {
//     console.log("Eu sou a Magali, tenho 25 anos, moro em Estrela e sou aluna da Labenu.")
// }


// b.
// function informacoesPessoa(nome, idade, cidade, estudante) {
    
//     if(estudante) {
//         estudante = "sou"
//     } else {
//         estudante = "não sou"
//     }
    
//     console.log(`Eu sou ${nome}, tenho ${idade} anoe, moro em ${cidade} e ${estudante} estudante`)
// }

// informacoesPessoa("Magali", 25, "Estrela", true)


/* 5 */
// a.
// function somaDoisNumeros(primeiroNumero, segundoNumero) {
//     const soma = primeiroNumero + segundoNumero
//     return soma
// }

// console.log(somaDoisNumeros(2,1))


// b.
// function comparaDoisNumeros(primeiroNumero, segundoNumero) {
//     let comparacao
    
//     if (primeiroNumero >= segundoNumero) {
//         comparacao = true
//     } else {
//         comparacao =false
//     }
     
//     return comparacao
// }

// console.log(comparaDoisNumeros(2,1))
// console.log(comparaDoisNumeros(2,2))
// console.log(comparaDoisNumeros(2,3))


// c. 
// function imprimeMensagem10vezes(mensagem) {
//     for (let i = 0; i < 10; i++) {
//         console.log(mensagem)
//     }
// }

// imprimeMensagem10vezes("oi")


/* 6 */
// a.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function verificaQuantidadeDeElementos(arrayDeElementos) {
//     return arrayDeElementos.length
// }
// console.log(verificaQuantidadeDeElementos(array))


// b. 
// function verificaSeEhPar(numero) {
//     if (numero % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(verificaSeEhPar(1))
// console.log(verificaSeEhPar(2))


// c.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaQuatidadeDeParesDoArray(arrayDeNumeros) {
//     let arrayDePares = []

//     for (let elemento of arrayDeNumeros) {
//         if (elemento % 2 === 0) {
//             arrayDePares.push(elemento)
//             //console.log(arrayDePares)
//         }
//     }

//     return arrayDePares.length
// }

// console.log(verificaQuatidadeDeParesDoArray(array))

// OU
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaQuatidadeDeParesDoArray(arrayDeNumeros) {
//     let quantidadeDePares = 0

//     for (let elemento of arrayDeNumeros) {
//         if (elemento % 2 === 0) {
//             quantidadeDePares++
//         }
//     }

//     return quantidadeDePares
// }

// console.log(verificaQuatidadeDeParesDoArray(array))



// d.
// function verificaSeEhPar(numero) {
//     if (numero % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaQuatidadeDeParesDoArray(arrayDeNumeros) {
//     let arrayDePares = []

//     for (let elemento of arrayDeNumeros) {
//         if (verificaSeEhPar(elemento)) {
//             arrayDePares.push(elemento)
//             //console.log(arrayDePares)
//         }
//     }

//     return arrayDePares.length
// }

// console.log(verificaQuatidadeDeParesDoArray(array))





/* DESAFIOS */
/* 1 */
// const imprimeSoma = (numero) => {
//     console.log(numero)
// }

// const somaDoisNumeros = (primeiroNumero, segundoNumero) => {
//     const soma = primeiroNumero + segundoNumero
//     imprimeSoma(soma)
// }

// somaDoisNumeros(1, 2)


/* 2 */
// a.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function criaArrayDeParesMultiplicadosPor2(arrayDeNumeros) {
//     let arrayDeParesMultiplicadosPor2 = []

//     for (let elemento of arrayDeNumeros) {
//         if (elemento % 2 === 0) {
//             arrayDeParesMultiplicadosPor2.push(elemento*2)
//         }
//     }

//     return arrayDeParesMultiplicadosPor2
// }

// console.log(criaArrayDeParesMultiplicadosPor2(array))


// b. 
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaMaiorNumeroDoArray(arrayDeNumeros) {
//     let maiorNumeroDoArray = 0

//     for (let elemento of arrayDeNumeros) {
//         if (maiorNumeroDoArray < elemento) {
//            maiorNumeroDoArray = elemento
//         }
//     }

//     return maiorNumeroDoArray
// }

// console.log(verificaMaiorNumeroDoArray(array))


// c.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaIndiceDoMaiorNumeroDoArray(arrayDeNumeros) {
//     let maiorNumeroDoArray = 0
//     let indiceDoMaiorNumero = -1
        
//     for (let elemento of arrayDeNumeros) {
//         if (maiorNumeroDoArray < elemento) {
//             maiorNumeroDoArray = elemento
//             indiceDoMaiorNumero++
//         } 
//     }

//     return indiceDoMaiorNumero
// }

// console.log(verificaIndiceDoMaiorNumeroDoArray(array))


// d.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function inverteArray(arrayDeNumeros) {
    let arrayInvertido = []

    for (let i = arrayDeNumeros.length - 1; i >= 0; i--) {
        arrayInvertido.push(arrayDeNumeros[i]) 
    }

    return arrayInvertido
}

console.log(inverteArray(array))

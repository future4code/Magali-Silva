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


// 2
// a. 
// (true && false && !false)
// (true && false && true)
// false

// b. 
// (true && false) || !true 
// false || false
// false

// c.
// (false || true) && (false || true) 
// true && true 
// true

// d.
// !(false && true) || !(true && true)
// !(false) || !(true)
// true || false
// true

// e.
// !(true) && !(true) || (!false && true && true)
// false && false || (true && true && true)
// true || true
// true


// 3. Não, o código não funciona. Primeiramente porque não foi declarado 
// um valor para a constante, de forma que este possa ser usado na
// comparação seguinte. Além disso, dentro do while não foi passada a
// expressão de incremento do valor de i, logo, gerará um loop infinito
// (porque a condição de parada nunca será atingida, visto que i sempre 
// valerá 0). A condição passada também não está de acordo com o objetivo 
//  proposto, visto que, se i for menor igual, sempre será impresso um 
// número a mais do que necessário.
// Código corrijido:
// const quantidadeDeNumerosPares = 6
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }


// 4.
// function tipoTriangulo(a, b, c) {
//   if (a === b && b === c) {
//     return "Equilátero"
//   } else if (a === b || b === c || c === a) {
//     return "Isósceles"
//   } else {
//     return "Escaleno"
//   }
// }
// console.log(tipoTriangulo(3, 2, 1))
// console.log(tipoTriangulo(3, 2, 2))
// console.log(tipoTriangulo(2, 3, 2))
// console.log(tipoTriangulo(2, 2, 3))
// console.log(tipoTriangulo(2, 2, 2))


// 5.
// function comparaNumeros(a, b) {
//   if (a > b) {
//     console.log(`O maior é: ${a}`)
//   } else {
//     console.log(`O maior é: ${b}`)
//   }

//   let aDivB = a % b
//   if (aDivB === 0) {
//     console.log(`${a} é divisível por ${b}`)
//   } else {
//     console.log(`${a} não é divisível por ${b}`)
//   }
  
//   let bDivA = b % a
//   if (bDivA === 0) {
//     console.log(`${b} é divisível por ${a}`)
//   } else {
//     console.log(`${b} não é divisível por ${a}`)
//   }

//   if(a > b) {
//     let diferenca = a - b
//     console.log(`A diferença entre eles é ${diferenca}`)
//   } else {
//     let diferenca = b - a
//     console.log(`A diferença entre eles é ${diferenca}`)
//   }
// }

// comparaNumeros(15, 30)
// comparaNumeros(30, 15)
// comparaNumeros(16, 15)





// EXERCÍCIOS DE FUNÇÕES

// 1.
// const numeros = [1, 5, 10, 50, 100, 500]

// function verificaSegundoMaior(arrayDeNumeros) {
//   let maiorNumero = 0
//   for (let numero of arrayDeNumeros) {
//     if (maiorNumero < numero) {
//       maiorNumero = numero
//     }
//   }
  
//   let segundoMaior = 0
//   for (let numero of arrayDeNumeros) {
//     if (segundoMaior < numero && numero !== maiorNumero) {
//       segundoMaior = numero
//     }
//   }

//   return segundoMaior
// }

// console.log(verificaSegundoMaior(numeros))

// function verificaSegundoMenor(arrayDeNumeros) {
//   let menorNumero = +Infinity
//   for (let numero of arrayDeNumeros) {
//     if (menorNumero > numero) {
//       menorNumero = numero
//     }
//   }
  
//   let segundoMenor = +Infinity
//   for (let numero of arrayDeNumeros) {
//     if (segundoMenor > numero && numero !== menorNumero) {
//       segundoMenor = numero
//     }
//   }
  
//   return segundoMenor
// }

// console.log(verificaSegundoMenor(numeros))


// 2.
// const hello = () => {
//   alert("Hello Future4")
// }

// const resultado = hello()





// EXERCÍCIOS DE OBJETOS

// 1. 
// Arrays e objetos são estruturas com "compartimentos", que servem para
// guardar informações. Enquanto arrays são mais usados para guardar informações 
// de um mesmo tipo, objetos são mais usados para guardar informações diversas 
// sobre determinada coisa.


// 2. 
// function criarRetangulo(lado1, lado2) {
//   const retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: (2 * (lado1 + lado2)),
//     area: (lado1 * lado2)
//   }

//   return retangulo
// }
// console.log(criarRetangulo(1,2))


// 3. 
// const filme = {
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   ano: 2004,
//   diretor: "Alfonso Cuarón",
//   atores: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
// }

// console.log(`${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrela por ${filme.atores}`)


// 4. 
// const pessoa = {
//   nome: "Magali",
//   idade: 25,
//   email: "magalidasilva.dev@gmail.com",
//   endereco: "Estrela, RS"
// }

// function anonimizarPessoa() {
//   const anonimo = {
//     ...pessoa,
//     nome: "ANÔNIMO"
//   }
  
//   return anonimo
// }

// console.log(pessoa)
// console.log(anonimizarPessoa())





// EXERCÍCIOS DE FUNÇÕES DE ARRAY

// 1. 
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const verificaSeAdulto = (pessoa, index, array) => {
//   return pessoa.idade >= 20
// }

// const adultos = pessoas.filter(verificaSeAdulto)
// console.log(adultos)

// const verificaSeMenorDeIdade = (pessoa, index, array) => {
//   return pessoa.idade < 20
// }

// const menoresDeIdade = pessoas.filter(verificaSeMenorDeIdade)
// console.log(menoresDeIdade)


// 2.
// a.
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicaPor2 = (elemento, index, array) => {
//   return elemento*2
// }

// const novoArray = array.map(multiplicaPor2)
// console.log(novoArray)


// b.
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicaPor3eTransformaEmString = (elemento, index, array) => {
//   return String(elemento*3)
// }

// const novoArray = array.map(multiplicaPor3eTransformaEmString)
// console.log(novoArray)


// c.
// const array = [1, 2, 3, 4, 5, 6]

// const verificaSeParOuImpar = (elemento, index, array) => {
//   if (elemento % 2 === 0) {
//     return `${elemento} é par`
//   } else {
//     return `${elemento} é ímpar`
//   }
// }

// const novoArray = array.map(verificaSeParOuImpar)
// console.log(novoArray)


// 3.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8}, // Nao pode
// 	{ nome: "João", idade: 20, altura: 1.3}, // Nao pode
// 	{ nome: "Pedro", idade: 15, altura: 1.9}, //pode
// 	{ nome: "Luciano", idade: 22, altura: 1.8}, //pode
// 	{ nome: "Artur", idade: 10, altura: 1.2}, // Nao pode
// 	{ nome: "Soter", idade: 70, altura: 1.9} // Nao pode
// ]

// a.
// const verificaSePodeEntrar = (pessoa, index, array) => {
//   return (pessoa.idade <= 60 && pessoa.idade > 14 && pessoa.altura >= 1.5)
// }
// const podeEntrar = pessoas.filter(verificaSePodeEntrar)
// console.log(podeEntrar)

// b.
// const informaNaoPodeEntrar = (pessoa, index, array) => {
//   return (pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5)
// }
// const naoPodeEntrar = pessoas.filter(informaNaoPodeEntrar)
// console.log(naoPodeEntrar)


// 4.
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const enviarEmail = (pessoa, index, array) => {
//   let genero  
//   let verbo
//   if (pessoa.genero === "masculino") {
//     genero = "Sr."
//     verbo = "lembrá-lo"
//   } else {
//     genero = "Sra."
//     verbo = "lembrá-la"
//   }


//   if (pessoa.cancelada) {
//     return `Olá, ${genero} ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//   } else {
//     return `Olá, ${genero} ${pessoa.nome}. Estamos enviando esta mensagem para ${verbo} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//   }
// }

// const email = consultas.map(enviarEmail)
// console.log(email)


5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente, index, array) => {

  let totalCompras = 0
  for (let i = 0; i < cliente.compras.length; i++) {
    totalCompras += cliente.compras[i]   
  }

  cliente.saldoTotal = cliente.saldoTotal - totalCompras
})

console.log(contas)
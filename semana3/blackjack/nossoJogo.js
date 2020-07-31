/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
**/




/*
console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {

   let cartaUmUsuario = comprarCarta()
   let cartaDoisUsuario = comprarCarta()
   let pontuacaoUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor

   let cartaUmComputador = comprarCarta()
   let cartaDoisComputador = comprarCarta()
   let pontuacaoComputador = cartaUmComputador.valor + cartaDoisComputador.valor

   console.log(`Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto}  - pontuação ${pontuacaoUsuario}`)

   console.log(`Computador - cartas: ${cartaUmComputador.texto} ${cartaDoisComputador.texto}  - pontuação ${pontuacaoComputador}`)

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou")
}

*/

// OU

console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {

   let usuario = [comprarCarta(), comprarCarta()]
   let pontuacaoUsuario = usuario[0].valor + usuario[1].valor 
   
   let computador = [comprarCarta(), comprarCarta()]
   let pontuacaoComputador = computador[0].valor + computador[1].valor

   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto}  - pontuação ${pontuacaoUsuario}`)

   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto}  - pontuação ${pontuacaoComputador}`)

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou")
}
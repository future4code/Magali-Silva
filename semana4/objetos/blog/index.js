// criando array que armazenará os objetos
const arrayPosts = []

// criando objeto que armazenará o post
let infosPost = {
    titulo: "",
    autor: "",
    conteudo: "",
    imagem: ""
}

function armazenaInfos() {
    // selecionando, via DOM, os inputs do formulário
    const inputTitulo = document.getElementById("titulo-post")
    const inputAutor = document.getElementById("autor-post")
    const inputConteudo = document.getElementById("conteudo-post")
    const inputImagem = document.getElementById("imagem-post") //desafio 1

    // adicionando os valores dos inputs no objeto
    infosPost.titulo = inputTitulo.value
    infosPost.autor = inputAutor.value
    infosPost.conteudo = inputConteudo.value
    

    if (inputImagem.value.includes('.png') || inputImagem.value.includes('.jpg')){
        infosPost.imagem = inputImagem.value
    } else {
        alert('Link incorreto! Insira imagem válida')
    } //desafio 1

    // adicionando objeto no array
    arrayPosts.push(infosPost)
    
    // imprimindo
    console.log(infosPost)
    console.log(arrayPosts)
    
    // limpando campos de input
    inputTitulo.value = ""
    inputAutor.value = ""
    inputConteudo.value = ""
    inputImagem.value = "" //desafio 1
}


function adicionaPost() {
    // selecionando o elemento do html que receberá o post e adicionando a ele uma div que englobará o post
    const containerDoPost = document.getElementById("container-de-posts")
    containerDoPost.innerHTML += `<div id="container-post"></div>`
    
    // selecionando o container-post e adicionando a ele as infos do post
    const post = document.getElementById("container-post")
    post.innerHTML += `<h1>${infosPost.titulo}</h1>`
    post.innerHTML += `<h4> De ${infosPost.autor}</h4>`
    post.innerHTML += `<p>${infosPost.conteudo}</p>`
    post.innerHTML += `<img src="${infosPost.imagem}"/>` //desafio 1
   
}   

function apertouBotao(evento) {
    armazenaInfos()
    adicionaPost()
}
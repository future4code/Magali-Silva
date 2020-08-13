import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        usuario: 'paulinha',
        fotoPerfil: 'https://picsum.photos/50/50',
        postFoto: 'https://picsum.photos/200/150'
      },
      {
        usuario: 'magali',
        fotoPerfil: 'https://picsum.photos/50/55',
        postFoto: 'https://picsum.photos/200/152'
      },
      {
        usuario: 'mag',
        fotoPerfil: 'https://picsum.photos/50/51',
        postFoto: 'https://picsum.photos/200/151'
      }
    ],

    valorInputUsuario: "",
    valorInputFotoPerfil: "",
    valorInputPost: ""
  }

  adicionaPost = () => {
    // criando um objeto que armazenará o novo post
    const novoPost = {
      usuario: this.state.valorInputUsuario,
      fotoPerfil: this.state.valorInputFotoPerfil,
      postFoto: this.state.valorInputPost
    }

    // copia array de posts e adiciona um post no final
    const novoPosts = [...this.state.posts, novoPost]

    // atualiza o estado "posts" adicionando a variavel "novoPosts"
    this.setState({ 
      posts: novoPosts,
      valorInputUsuario: "",
      valorInputFotoPerfil: "",
      valorInputPost: ""
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value })
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value })
  }

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
          <Post
          nomeUsuario={post.usuario}
          fotoUsuario={post.fotoPerfil}
          fotoPost={post.postFoto}
        />
      )
    })

    return (
      <div className="app-container">
        
        <input
          placeholder={"Usuário"}
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
        />
        <input
          placeholder={"Foto perfil"}
          value={this.state.valorInputFotoPerfil}
          onChange={this.onChangeInputFotoPerfil}
        />
        <input
          placeholder={"Foto post"}
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
        />

        <button onClick={this.adicionaPost} >Adicionar post</button>
        
        <div>{listaDePosts}</div>
      </div>
    )
  }
}

export default App;

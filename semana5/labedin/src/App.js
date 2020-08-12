import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

import foto from './img/foto.jpg';
import logo from './img/labedin.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="header">
      <Header 
          imagem={logo}
          lupa="https://image.flaticon.com/icons/svg/126/126474.svg"
        />
      </div>

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Magali da Silva" 
          descricao="Oi, eu sou a Magali. Sou estudante da Labenu. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/svg/181/181535.svg" 
          nome="Email:" 
          endereco="magalidasilva.dev@gmail.com"
        />
        
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/svg/181/181508.svg" 
          nome="Endereço:" 
          endereco="Rua xxxxxx, 999. Estrela/RS"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências Profissionais</h2>
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
          nome="Labenu" 
          descricao="Curso de Desenvolvimento Web Full Stack" 
        />
        
        <CardGrande 
          imagem="https://s1.static.brasilescola.uol.com.br/be/vestibular/-583ea1bca1702.jpg" 
          nome="UNISC" 
          descricao="Graduação em Engenharia Civil" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

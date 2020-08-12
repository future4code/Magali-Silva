import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'magali'}
            fotoUsuario={'https://picsum.photos/50/55'}
            fotoPost={'https://picsum.photos/200/152'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'mag'}
            fotoUsuario={'https://picsum.photos/50/51'}
            fotoPost={'https://picsum.photos/200/151'}
          />
        </div>
      </div>
    );
  }
}

export default App;

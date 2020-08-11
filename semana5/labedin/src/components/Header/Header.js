import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className="header-container">
            <img src={ props.imagem } />
            <div className="busca">
                <select className="tipo-de-busca">
                    <option>Vagas</option>
                    <option>Pessoas</option>
                    <option>Aprendizagem</option>
                </select>
                <input className="input" />
                <input className="input" />
                <img className="image" src={ props.lupa } />
            </div>            
        </div>
    )
}

export default Header;
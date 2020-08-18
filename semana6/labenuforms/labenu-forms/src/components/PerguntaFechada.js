import React from 'react';
import styled from 'styled-components';

const ContainerPerguntaFechada = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

class PerguntaFechada extends React.Component {
    render() {
        const opcoes = this.props.opcoes.map((opcao) => {
            return <option value={opcao}> {opcao} </option>
        })
        
        return (
            <ContainerPerguntaFechada>
                <p>{this.props.pergunta}</p>
                <select>
                    {opcoes}
                </select>
            </ContainerPerguntaFechada>
        )
    }    
} 

export default PerguntaFechada;
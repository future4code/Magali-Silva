import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { baseUrl, headers } from '../constants/constantesAxios'

const ConteinerCadastro = styled.div`
    width: 25vw;
    height: 30vh;
    
    border: solid 1px black;
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.div`
    margin-bottom: 15px;
`

const BotaoCadastro = styled.button`
    background-color: #90EE90;
    border: none;
    outline: none;

    padding: 10px 20px;

    :hover {
        background-color: #32CD32;
    }
` 

class CadastroUsuario extends React.Component {
    state = {
        valorInputName: '',
        valorInputEmail: ''
      }
    
        cadastrarUsuario = () => {
            const body = {
                name: this.state.valorInputName,
                email: this.state.valorInputEmail
            };
    
            const request = axios.post( baseUrl, body, headers );
    
                request
                .then((resposta) => {
                    alert(`O usuário ${this.state.valorInputName} foi cadastrado com sucesso!`)
                    this.setState({ 
                    valorInputName: '',
                    valorInputEmail: ''
                    })
                })
                .catch((erro) => {
                    alert("Erro ao cadastrar usuário.")
                }
            );
        };
    
        render() {
            const onChangeInputName = (event) => {
                this.setState({        
                    valorInputName: event.target.value        
                })
            };
    
            const onChangeInputEmail = (event) => {
                this.setState({
                    valorInputEmail: event.target.value
                })
            };
    
            return (            
                <ConteinerCadastro>
                    <Input>
                        <label>Nome:</label><input value={this.state.valorInputName} onChange={onChangeInputName} />
                    </Input>
    
                    <Input>
                        <label>E-mail:</label><input value={this.state.valorInputEmail} onChange={onChangeInputEmail} />
                    </Input>
                    
                    <BotaoCadastro onClick={this.cadastrarUsuario}>Salvar</BotaoCadastro>
                    
                    
                </ConteinerCadastro>   
            );    
        }
}

export default CadastroUsuario;
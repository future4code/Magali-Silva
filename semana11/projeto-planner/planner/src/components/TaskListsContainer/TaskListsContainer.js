import React from 'react'
import { Section, Div } from './styled';

const TaskListsContainer = () => {
    return (
        <Section>
            <Div>
                <h3>Domingo</h3>
                <div id="domingo"></div>
            </Div>

            <Div>
                <h3>Segunda-feira</h3>
                <div id="segunda"></div>
            </Div>

            <Div>
                <h3>Terça-feira</h3>
                <div id="terca"></div>
            </Div>
    
            <Div>
                <h3>Quarta-feira</h3>
                <div id="quarta"></div>
            </Div>
    
            <Div>
                <h3>Quinta-feira</h3>
                <div id="quinta"></div>
            </Div>

            <Div>                    
                <h3>Sexta-feira</h3>               
                <div id="sexta"></div>
            </Div>

            <Div>
                <h3>Sábado</h3>
                <div id="sabado"></div>
            </Div>
        </Section>
    )
}

export default TaskListsContainer;
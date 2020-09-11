import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl, student } from '../../constants/axiosConstants'
import { Container, Div, ContainerPerson, Image } from '../Matches/styled';
import NavBar from '../../components/NavBar/NavBar'
import people from '../../assets/icons/people.svg'

function Matches(props) {
  const [ matchesList, setMatchesList] = useState([])

  const getMachets = () => {
    axios.get(`${baseUrl}:${student}/matches`)
      .then((response) => {
        setMatchesList(response.data.matches)
      })
      .catch((error) => {
        console.log(`Erro ao pegar a lista de matches. ${error}`)
      })
  }

  useEffect(() => {
    getMachets()
  }, [matchesList])

  return (
    <Container>
      <NavBar 
        onClick={props.onClick}
        srcIcon={people}
        altIcon={"Ícone people"} 
      />
      <Div>
        {matchesList.map((person) => {
          return (
            <ContainerPerson key={person.id}>
              <Image src={person.photo}/>
              <p>{person.name}</p>
            </ContainerPerson>
          )
        })}
      </Div>
    </Container>
  );
}

export default Matches;
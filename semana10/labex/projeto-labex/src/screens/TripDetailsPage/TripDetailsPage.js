import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'
import { baseUrl } from '../../constants/axiosConstants'
import { decideCandidate } from '../../services/decideCandidate'
import TripButton from '../../components/TripButton/TripButton'
import { Container, H2, I, DetailContainer, PersonContainer, ButtonContainer } from './styled'

function TripDetailsPage() {

  useChangePageTitle("Adicionar Viagem")
  useProtectPage()

  const pathParams = useParams();

  const [ trip, setTrip ] = useState({})
  const [ candidate, setCandidate ] = useState([])

  const getTripDetail = () => {
    Axios.get(`${baseUrl}/trip/${pathParams.id}`, 
    { 
      headers: { 
        auth: localStorage.getItem("token") 
      }})
      .then((response) => {
        setTrip(response.data.trip)
        setCandidate(response.data.trip.candidates)
      })
      .catch((error) => {console.log(error)})
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  return (
    <Container>
      <H2> Detalhes da viagem <I>{trip.name}</I> </H2>
      <DetailContainer>        
          <h3> <strong>Candidatos</strong> </h3>
          {candidate.map((person) => {
            return (
              <PersonContainer key={person.id} >
                <p> <strong>Nome:</strong> {person.name}</p>
                <p> <strong>Idade:</strong> {person.age}</p>
                <p> <strong>Profissão: </strong>{person.profession}</p>
                <p> <strong>País:</strong> {person.country}</p>
                <p> <strong>Motivação:</strong> {person.applicationText}</p>
                <ButtonContainer>
                  <TripButton  buttonOnClick={() => decideCandidate(trip.id, person.id, true)} text={"✔"} /> 
                  <TripButton  buttonOnClick={() => decideCandidate(trip.id, person.id, false)} text={"✖"} />
                </ButtonContainer>
              </PersonContainer>
            )            
          })}
        
      </DetailContainer>
    </Container>
  );
}

export default TripDetailsPage;
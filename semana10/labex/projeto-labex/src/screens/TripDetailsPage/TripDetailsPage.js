import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { goToHomePage, goBack } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useRequestData } from '../../hooks/useRequestData';
import { baseUrl } from '../../constants/axiosConstants'
import Axios from 'axios';
import { Container, H3, I, DetailContainer, PersonContainer } from './styled'
import TripButton from '../../components/TripButton/TripButton'
import { decideCandidate } from '../../services/decideCandidate'

function TripDetailsPage() {
  const history = useHistory();

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
      <H3> Detalhes da viagem <I>{trip.name}</I> </H3>
      <DetailContainer>
        <p> <strong>Descrição:</strong> {trip.description}</p>
        <p> <strong>Planeta:</strong> {trip.planet}</p>
        <p> <strong>Duração:</strong> {trip.durationInDays} dias</p>
        <p> <strong>Data:</strong> {trip.date}</p>
        <div>
          <p> <strong>Candidatos:</strong> </p>
          {candidate.map((person) => {
            return (
              <PersonContainer key={person.id} >
                <p> <strong>Nome:</strong> {person.name}</p>
                <p> <strong>Idade:</strong> {person.age}</p>
                <p> <strong>Profissão: </strong>{person.profession}</p>
                <p> <strong>País:</strong> {person.country}</p>
                <p> <strong>Motivação:</strong> {person.applicationText}</p>
                <div> {/* falta testar se está aprovando o candidato ou não */}
                  <TripButton  buttonOnClick={() => decideCandidate(trip.id, person.id, true)} text={"✔"} /> 
                  <TripButton  buttonOnClick={() => decideCandidate(trip.id, person.id, false)} text={"✖"} />
                </div>
              </PersonContainer>
            )            
          })}
        </div>
      </DetailContainer>
      <button onClick={() => goBack(history)} >VOLTAR</button>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </Container>
  );
}

export default TripDetailsPage;
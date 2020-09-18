import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToTripDetailsPage, goToHomePage, goToSubscriptionPage, goBack } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';
import { useRequestData } from '../../hooks/useRequestData';
import { baseUrl } from '../../constants/axiosConstants';
import TripButton from '../../components/TripButton/TripButton'
import { Container, H2, TripsContainer, TripCard } from './styled';

function ListTripsPage() {
  const history = useHistory();

  useChangePageTitle("LABEX - Viagens")

  const [ trips, setTrips] = useRequestData(`${baseUrl}/trips`, [])

  if (trips === null) {
    return (
      <div>
        <p>Carregando viagens</p>
      </div>
    )
  }

  // Verifica se tem administrador logado. Se tiver, o botão da página da lista de viagens muda para "VER DETALHES", se não o botão muda para "INSCREVA-SE"
  const changeButton = (id) => {
    const token = window.localStorage.getItem("token");
    
    if (token) {
      return (
        <TripButton buttonOnClick={() => goToTripDetailsPage(history, id)} text={"VER DETALHES"} />
      )
      
    } else {
      return (
        <TripButton buttonOnClick={() => goToSubscriptionPage(history)} text={"INSCREVA-SE"} />
      )
    }
  }

  return (
    <Container>
      <H2>Viagens Disponíveis</H2>
      <TripsContainer>
        {trips.map((trip) => {
          return (         
            <TripCard key={trip.id} >
              <h3>{trip.name}</h3>
              <p> <strong>Descrição:</strong> {trip.description}</p>
              <p> <strong>Planeta:</strong> {trip.planet}</p>
              <p> <strong>Duração:</strong> {trip.durationInDays} dias</p>
              <p> <strong>Data:</strong> {trip.date}</p>
              {changeButton(trip.id)}
            </TripCard>
          )
        })}
      </TripsContainer>
      <button onClick={() => goBack(history)} >VOLTAR</button>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </Container>
  );
}

export default ListTripsPage;
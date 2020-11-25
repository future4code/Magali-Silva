import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToTripDetailsPage, goToSubscriptionPage } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';
import { useRequestData } from '../../hooks/useRequestData';
import { baseUrl } from '../../constants/axiosConstants';
import TripButton from '../../components/TripButton/TripButton'
import Title from '../../components/Title/Title';
import { Container, TripsContainer, TripCard } from './styled';

function ListTripsPage() {
  const history = useHistory();

  useChangePageTitle("LABEX - Viagens")

  const [ trips ] = useRequestData(`${baseUrl}/trips`, [])

  if (trips === null) {
    return (
      <div>
        <p>Carregando viagens</p>
      </div>
    )
  }

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
      <Title title={"Viagens Disponíveis"} />
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
    </Container>
  );
}

export default ListTripsPage;
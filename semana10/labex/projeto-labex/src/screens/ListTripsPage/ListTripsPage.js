import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToTripDetailsPage, goToHomePage } from '../../router/goToPages';

function ListTripsPage() {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA DE LISTA DE VIAGENS</p>
      <div>
        <p>Viagem 1</p>
        <button onClick={() => goToTripDetailsPage(history)}>VER DETALHES</button>
      </div>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default ListTripsPage;
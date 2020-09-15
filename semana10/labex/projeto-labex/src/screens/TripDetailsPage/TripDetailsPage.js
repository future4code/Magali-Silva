import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages';

function TripDetailsPage() {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA DE DETALHES DA VIAGEM</p>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default TripDetailsPage;
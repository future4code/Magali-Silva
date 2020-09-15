import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage, goToListTripsPage, goToSubscriptionPage } from '../../router/goToPages'

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA INICIAL</p>
      <button onClick={() => goToLoginPage(history)} > login </button>
      <button onClick={() => goToListTripsPage(history)} >VIAGENS</button>
      <button onClick={() => goToSubscriptionPage(history)} >INSCRIÇÕES</button>
    </div>
  );
}

export default HomePage;
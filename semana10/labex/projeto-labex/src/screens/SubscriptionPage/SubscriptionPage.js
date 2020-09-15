import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages';

function SubscriptionPage() {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA DE INSCRIÇÃO PARA VIAGEM</p>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default SubscriptionPage;
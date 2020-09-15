import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages'

function SubscriptionListPage() {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA DE LISTA DE INSCRIÇÃO DAS VIAGENS</p>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default SubscriptionListPage;
import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCriateTripPage, goToSubscriptionsListPage, goToHomePage } from '../../router/goToPages';

function AdminPage() {
  const history = useHistory();
  
  return (
    <div>
      <p>ESSA É A PÁGINA DO ADMINISTRADOR</p>
      <button onClick={() => goToCriateTripPage(history)}>CRIAR VIAGEM</button>
      <button onClick={() => goToSubscriptionsListPage(history)} > INSCRIÇÕES </button>
      <br />
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default AdminPage;
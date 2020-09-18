import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToCriateTripPage, goToListTripsPage, goToHomePage, goBack } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'

function AdminPage() {
  const history = useHistory();
  
  useChangePageTitle("LABEX - Administrador")
  useProtectPage()

  return (
    <div>
      <p>ESSA É A PÁGINA DO ADMINISTRADOR</p>
      <button onClick={() => goToListTripsPage(history)} > VIAGENS </button>
      <button onClick={() => goToCriateTripPage(history)}>ADICIONAR VIAGEM</button>
      <br />
      <button onClick={() => goBack(history)} >VOLTAR</button>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default AdminPage;
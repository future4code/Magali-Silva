import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useRequestData } from '../../hooks/useRequestData';
import { baseUrl } from '../../constants/axiosConstants'

function TripDetailsPage() {
  const history = useHistory();

  useChangePageTitle("Adicionar Viagem")
  useProtectPage()

  return (
    <div>
      <p>ESSA É A PÁGINA DE DETALHES DA VIAGEM</p>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default TripDetailsPage;
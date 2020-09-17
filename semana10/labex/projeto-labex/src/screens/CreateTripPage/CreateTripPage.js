import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages'
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'

function CreateTripPage() {
  const history = useHistory();

  useChangePageTitle("LABEX - Adicionar Viagem")
  useProtectPage()

  return (
    <div>
      <p>ADICIONE UMA VIAGEM</p>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default CreateTripPage;
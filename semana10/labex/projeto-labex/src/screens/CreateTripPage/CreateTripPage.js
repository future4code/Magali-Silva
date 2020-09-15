import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../router/goToPages'

function CreateTripPage() {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA DE CRIAÇÃO DE VIAGENS</p>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default CreateTripPage;
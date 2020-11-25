import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCriateTripPage, goToListTripsPage } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { useProtectPage } from '../../hooks/useProtectPage'
import MainTitle from '../../components/MainTitle/MainTitle';
import Button from '../../components/Button/Button'
import { Container, ButtonContainer } from './styled'

function AdminPage() {
  const history = useHistory();
  
  useChangePageTitle("LABEX - Administrador")
  useProtectPage()

  return (
    <Container>
      <MainTitle mainTitle={"Área do administrador"} />     
      <ButtonContainer>
        <Button buttonOnClick={() => goToListTripsPage(history)} text={"VIAGENS"} />
        <Button buttonOnClick={() => goToCriateTripPage(history)} text={"CRIAR VIAGEM"} />
      </ButtonContainer>
    </Container>
  );
}

export default AdminPage;
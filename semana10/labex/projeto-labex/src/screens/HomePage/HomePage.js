import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToListTripsPage, goToSubscriptionPage } from '../../router/goToPages'
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import Button from '../../components/Button/Button'
import MainTitle from '../../components/MainTitle/MainTitle'
import { Container, ButtonContainer } from './styled'

const HomePage = () => {
  const history = useHistory();

  useChangePageTitle("LABEX")
  
  return (
    <Container>
      <MainTitle mainTitle={"Encontre as melhores viagens espaciais!"} />
      <ButtonContainer>
        <Button buttonOnClick={() => goToListTripsPage(history)} text={"VIAGENS"} />
        <Button buttonOnClick={() => goToSubscriptionPage(history)} text={"INSCRIÇÕES"} />
      </ButtonContainer>
    </Container>
  );
}

export default HomePage;
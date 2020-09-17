import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToListTripsPage, goToSubscriptionPage } from '../../router/goToPages'
import { useChangePageTitle } from '../../hooks/useChangePageTitle'
import { Container, H2, ButtonContainer } from './styled'
import Button from '../../components/Button/Button'
// import Header from '../../components/Header/Header';

const HomePage = () => {
  const history = useHistory();

  useChangePageTitle("LABEX")
  
  return (
    <Container>
      {/* <Header/> */}
      <H2>Encontre as melhores viagens espaciais!</H2>
      <ButtonContainer>
        <Button buttonOnClick={() => goToListTripsPage(history)} text={"VIAGENS"} />
        <Button buttonOnClick={() => goToSubscriptionPage(history)} text={"INSCRIÇÕES"} />
      </ButtonContainer>
    </Container>
  );
}

export default HomePage;
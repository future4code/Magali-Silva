import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl, student } from '../../constants/axiosConstants'
import { Container, ButtonContainer, ProfileContainer, Photo, Identification, Name, Bio } from '../Home/styled';
import NavBar from '../../components/NavBar/NavBar'
import matches from '../../assets/icons/matches.svg';
import ButtonMatch from '../../components/ButtonMatch/ButtonMatch'

function Home(props) {
  const [ currentProfile, setCurrentProfile ] = useState({})
  const [ profileId, setProfileId ] = useState("")

  const chooseProfile = () => {
    axios.get(`${baseUrl}:${student}/person`)
      .then((response) => {
        setCurrentProfile(response.data.profile)
        setProfileId(response.data.profile.id)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    chooseProfile()
  }, [])

  const choosePerson = (choiceMatch) => {
    let body = {
      id: profileId,
      choice: choiceMatch
    }

    axios.post( `${baseUrl}:${student}/choose-person`, body )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

    chooseProfile()
  }

  return (
    <Container >
      <NavBar 
        onClick={props.onClick}
        srcIcon={matches}
        altIcon={"Ícone matches"} 
      />
      <ProfileContainer >
        <Photo src={currentProfile.photo} />
        <Identification>
          <Name> <b> {currentProfile.name} </b>, {currentProfile.age} </Name>
          <Bio>{currentProfile.bio}</Bio>
        </Identification>
      </ProfileContainer>
      <ButtonContainer>
        <ButtonMatch 
          text={"X"} 
          borderColor={"red"}
          backgroundColor={"white"}
          color={"red"}
          hoverBackgroundColor={"red"}
          hoverColor={"white"}

          onClick={() => choosePerson(false)}
        />
        <ButtonMatch 
          text={"♥"}
          borderColor={"green"}
          backgroundColor={"white"}
          color={"green"}
          hoverBackgroundColor={"green"}
          hoverColor={"white"}

          onClick={() => choosePerson(true)}
        />
      </ButtonContainer>
    </Container>
  );
}

export default Home;
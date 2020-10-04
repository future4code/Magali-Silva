import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import {  goToPostsFeedPage, goToLoginPage } from '../../routes/Coordinator'
import { ButtonContainer } from './styled'
import { Typography } from '@material-ui/core'

const Header = (props) => {
  const history = useHistory()
  const {buttonName, setButtonName} = props
  
  const logout = () => {
    localStorage.removeItem("token")
  }

  const handleButtonLogin = () => {
    const token = localStorage.getItem("token")

    if (token) {
      logout()
      setButtonName("Login") 
    }
    
    goToLoginPage(history)
  }

  return(
    <AppBar>
        <Toolbar>
          <ButtonContainer>
            <Button color={"inherit"} onClick={() =>  goToPostsFeedPage(history)}>
              <Typography variant={"h6"} > LabEddit </Typography> 
            </Button>
            <Button color={"inherit"} onClick={handleButtonLogin}>
            <Typography variant={"h6"} > {buttonName} </Typography> 
            </Button>
          </ButtonContainer>
        </Toolbar>
    </AppBar>
  )
}

export default Header
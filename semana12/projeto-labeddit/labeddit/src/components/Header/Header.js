import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import {  goToPostsFeedPage } from '../../routes/Coordinator'
import { ButtonContainer } from './styled'
import { Typography } from '@material-ui/core'

const Header = () => {
  const history = useHistory()
  
  return(
    <AppBar>
        <Toolbar>
          <ButtonContainer>
            <Button color={"inherit"} onClick={() =>  goToPostsFeedPage(history)}>
              <Typography variant={"h6"} > LabEddit </Typography> 
            </Button>
            <Button color={"inherit"} onClick={() => null}>
            <Typography variant={"h6"} > Logout </Typography> 
            </Button>
          </ButtonContainer>
        </Toolbar>
    </AppBar>
  )
}

export default Header
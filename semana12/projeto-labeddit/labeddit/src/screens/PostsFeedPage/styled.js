import styled from 'styled-components'
import {Card} from '@material-ui/core'

// CreatePostForm.js
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70vw;
  max-width: 380px;
`
export const Form = styled.form`
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

// PostsFeedPage.js
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const CreatePostContainer = styled(Card)`
  width: 90%;
  max-width: 500px;
  height: 250px;
  
  display: flex;
  justify-content: center;

  margin-bottom: 25px;
`
import styled from 'styled-components'
import {Card} from '@material-ui/core'

// PostDetailPage.js
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`
export const CreateCommentContainer = styled(Card)`
  width: 90%;
  max-width: 500px;
  height: 180px;
  
  display: flex;
  justify-content: center;

  margin-bottom: 25px;
`

// CreateCommentForm.js
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70vw;
  max-width: 380px;
`
export const Form = styled.form`
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
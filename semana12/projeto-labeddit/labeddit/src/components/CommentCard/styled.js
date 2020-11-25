import styled from 'styled-components'
import {Card, CardContent, CardActionArea} from '@material-ui/core'

export const CommentContainer = styled(Card)`
  width: 90%;
  max-width: 500px;
  min-height: 150px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
`

export const CommentContent = styled(CardContent)`
  width: 95%;
`

export const InteractionContainer = styled(CardActionArea)`
  display: flex;
  justify-content: space-between;
`
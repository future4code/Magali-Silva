import React from 'react'
import { Typography, IconButton, CardActions } from '@material-ui/core'
import { CommentContainer, CommentContent, InteractionContainer } from './styled'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const CommentCard = (props) => {
    const {username, text, votesCommentCount } = props    

    return (
        <CommentContainer>
            <CommentContent>
                <Typography > {username} </Typography>
                <Typography align={"center"}> {text} </Typography>
            </CommentContent>
            <InteractionContainer>
                <CardActions>
                    <IconButton >
                        <ArrowUpwardIcon/>
                    </IconButton>
                    <Typography> {votesCommentCount} </Typography>
                    <IconButton >
                        <ArrowDownwardIcon/>
                    </IconButton>
                </CardActions>
            </InteractionContainer>

        </CommentContainer>
    )
}

export default CommentCard
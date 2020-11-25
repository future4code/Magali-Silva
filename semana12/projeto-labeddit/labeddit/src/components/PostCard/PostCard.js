import React, { useState } from 'react'
import { Typography, IconButton, CardActions } from '@material-ui/core'
import { PostContainer, PostContent, InteractionContainer } from './styled'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { goToPostDetailPage } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';
import { postVote } from '../../services/post'


const PostCard = (props) => {
    const history = useHistory()
    
    const { postId, username, title, text, votesCount, commentsCount } = props
    
    const [ vote, setVote ] = useState(0)

    const postsVote = (id, typeVote) => {
        const token = localStorage.getItem("token")
        
        if(vote === 0) {
            setVote(typeVote)
            postVote(id, token, typeVote)
        } else {
            setVote(0)
            postVote(id, token, 0)
        }
    }

    return (
        <PostContainer>
            <PostContent onClick={() => goToPostDetailPage(history, postId)}>
                <Typography > {username} </Typography>
                <Typography align={"center"} color={"primary"} variant={"h6"}> {title} </Typography>
                <Typography align={"center"}> {text} </Typography>
            </PostContent>
            <InteractionContainer>
                <CardActions>
                    <IconButton onClick={() => postsVote(postId, 1)}>
                        <ArrowUpwardIcon/>
                    </IconButton>
                    <Typography> {votesCount} </Typography>
                    <IconButton onClick={() => postsVote(postId, -1)}>
                        <ArrowDownwardIcon/>
                    </IconButton>
                </CardActions>
                <CardActions onClick={() => goToPostDetailPage(history, postId)}>
                    <Typography > {commentsCount} cometários </Typography>
                </CardActions>
            </InteractionContainer>

        </PostContainer>
    )
}

export default PostCard
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage'
import { getPostDetail } from '../../services/post'
import PostCard from '../../components/PostCard/PostCard'
import { DetailContainer, CreateCommentContainer } from './styled';
import CreateCommentForm from './CreateCommentForm';
import CommentCard from '../../components/CommentCard/CommentCard'

const PostDetailPage = () => {
    const pathParams = useParams();
    const [postDetail, setPostDetail] = useState({})
    const [postComments, setPostComments] = useState([])

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        getPostDetail(pathParams.id, token, setPostDetail, setPostComments)
    }, [pathParams.id])
    
    return (
        <DetailContainer>
            <PostCard 
                key={postDetail.id} 
                postId={postDetail.id}
                username={postDetail.username} 
                title={postDetail.title} 
                text={postDetail.text} 
                votesCount={postDetail.votesCount} 
                commentsCount={postDetail.commentsCount} 
            />
            <CreateCommentContainer>
                <CreateCommentForm/>       
            </CreateCommentContainer>
            

            {postComments.map((comment) => {
                return (
                    <CommentCard 
                        key={comment.id}
                        username={comment.username}
                        text={comment.text}
                        votesCommentCount={comment.votesCount}
                    />
                )
            })}
        </DetailContainer>
    )
}

export default PostDetailPage
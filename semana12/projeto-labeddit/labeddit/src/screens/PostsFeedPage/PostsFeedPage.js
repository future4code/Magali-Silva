import React, { useEffect, useState } from 'react'
import CreatePostForm from './CreatePostForm'
import PostCard from '../../components/PostCard/PostCard'
import { FeedContainer, CreatePostContainer } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import { getPosts } from '../../services/post'


const PostsFeedPage = () => {
    const [postArray, setPostArray] = useState([])

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        getPosts(token, setPostArray)
    }, [])


    return (
        <FeedContainer>
            <CreatePostContainer>
                <CreatePostForm />
            </CreatePostContainer>
            {postArray.map((post) => {

                if(typeof post.title === "string") {
                    return (
                        <PostCard 
                            key={post.id} 
                            postId={post.id}
                            username={post.username} 
                            title={post.title} 
                            text={post.text} 
                            votesCount={post.votesCount} 
                            commentsCount={post.commentsCount} 
                        />
                    )

                }
            })}
            
        </FeedContainer>
    )
}

export default PostsFeedPage
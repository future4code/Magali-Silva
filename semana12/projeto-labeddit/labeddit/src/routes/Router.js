import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import PostsFeedPage from '../screens/PostsFeedPage/PostsFeedPage'
import PostDetailPage from '../screens/PostDetailPage/PostDetailPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/login'} >
                <LoginPage />
            </Route>
            <Route exact path={'/cadastro'} >
                <SignUpPage />
            </Route>
            <Route exact path={['/feed', '/']} >
                <PostsFeedPage />
            </Route>
            <Route exact path={'/feed/:id'} >
                <PostDetailPage />
            </Route>
            <Route>
                <div>ERRO 404</div>
            </Route>
        </Switch>
    )
}

export default Router
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import PostsFeedPage from '../screens/PostsFeedPage/PostsFeedPage'
import PostDetailPage from '../screens/PostDetailPage/PostDetailPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = (props) => {
    return (
        <Switch>
            <Route exact path={'/login'} >
                <LoginPage setButtonName={props.setButtonName} />
            </Route>
            <Route exact path={'/cadastro'} >
                <SignUpPage setButtonName={props.setButtonName} />
            </Route>
            <Route exact path={['/feed', '/']} >
                <PostsFeedPage />
            </Route>
            <Route exact path={'/feed/:id'} >
                <PostDetailPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage/HomePage';
import LoginPage from '../screens/LoginPage/LoginPage';
import AdminPage from '../screens/AdminPage/AdminPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage';
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage';
import SubscriptionPage from '../screens/SubscriptionPage/SubscriptionPage';
import Header from '../components/Header/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/"}> 
                    <HomePage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/login/admin"}>
                    <AdminPage />
                </Route>

                <Route exact path={"/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={`/trips/details/:id`}>
                    <TripDetailsPage />
                </Route>

                <Route exact path={"/application-form"}>
                    <SubscriptionPage />
                </Route>

                <Route>
                    <p>ERRO 404</p>
                </Route>

            </Switch>
        </BrowserRouter>
    )

}

export default Router;
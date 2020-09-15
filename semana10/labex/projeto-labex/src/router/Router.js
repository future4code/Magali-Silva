import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage/HomePage';
import LoginPage from '../screens/LoginPage/LoginPage';
import AdminPage from '../screens/AdminPage/AdminPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import SubscriptionsListPage from '../screens/SubscriptionsListPage/SubscriptionsListPage'
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage';
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage';
import SubscriptionPage from '../screens/SubscriptionPage/SubscriptionPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}> 
                    <HomePage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/login/:id-administrador"}>
                    <AdminPage />
                </Route>

                <Route exact path={"/login/:id-administrador/criar-viagem"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/login/:id-administrador/inscricoes"}>
                    <SubscriptionsListPage />
                </Route>

                <Route exact path={"/viagens"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/viagens/detalhes/:id-viagem"}>
                    <TripDetailsPage />
                </Route>

                <Route exact path={"/inscricao"}>
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
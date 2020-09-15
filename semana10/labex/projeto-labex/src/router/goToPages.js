export const goToHomePage = (history) => {
    history.push(`/`);
}

export const goToLoginPage = (history) => {
    history.push(`/login`);
}

export const goToAdminPage = (history) => {
    history.push(`/login/:id-administrador`);
}

export const goToCriateTripPage = (history) => {
    history.push(`/login/:id-administrador/criar-viagem`);
}

export const goToSubscriptionsListPage = (history) => {
    history.push(`/login/:id-administrador/inscricoes`);
}

export const goToListTripsPage = (history) => {
    history.push(`/viagens`);
}

export const goToTripDetailsPage = (history) => {
    history.push(`/viagens/detalhes/:id-viagem`);
}

export const goToSubscriptionPage = (history) => {
    history.push(`/inscricao`);
}


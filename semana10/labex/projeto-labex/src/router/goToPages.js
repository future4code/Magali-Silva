export const goToHomePage = (history) => {
    history.push(`/`);
}

export const goToLoginPage = (history) => {
    history.push(`/login`);
}

export const goToAdminPage = (history) => {
    history.push(`/login/admin`);
}

export const goToCriateTripPage = (history) => {
    history.push(`/trips/create`);
}

export const goToListTripsPage = (history) => {
    history.push(`/trips/list`);
}

export const goToTripDetailsPage = (history, id) => {
    history.push(`/trips/details/${id}`);
}

export const goToSubscriptionPage = (history) => {
    history.push(`/application-form`);
}

export const goBack = (history) => {
    history.goBack()
}
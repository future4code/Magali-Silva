export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}

export const goToPostsFeedPage = (history) => {
    history.push('/feed')
}

export const goToPostDetailPage = (history, id) => {
    history.push(`/feed/${id}`)
}
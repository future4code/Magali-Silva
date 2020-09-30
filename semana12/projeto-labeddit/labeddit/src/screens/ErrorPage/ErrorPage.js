import React from 'react'
import { Typography } from '@material-ui/core'
import image from '../../assets/face_emoji.png'
import {ErrorImage, ErrorPageContainer} from './styled'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage alt={"Erro 404"} src={image} />
            <Typography color={"primary"} variant={"h4"} align={"center"}>ERRO 404</Typography>
            <Typography variant={"h5"} align={"center"}>Página não encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;
import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types'

export const generateToken = (payload: AuthenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: "2min"
        }
    )
}

export const getTokenData = (
    token: string
): AuthenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
}
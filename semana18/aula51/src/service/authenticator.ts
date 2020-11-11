import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types'

export const generateToken = (payload: AuthenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}

export const getTokenData = (
    token: string
): AuthenticationData => {
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
    return {
        id: payload.id,
        role: payload.role
    }
}
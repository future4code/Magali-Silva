import { useState, useEffect } from "react"
import { getData } from '../services/getData'

export const useRequestData = (url, initialState) => {
    const [ data, setData ] = useState(initialState);

    useEffect(() => {
        getData(url, setData)
    }, [url])

    const updateData = () => {
        getData(url, setData)
    }

    return [data, updateData]
}
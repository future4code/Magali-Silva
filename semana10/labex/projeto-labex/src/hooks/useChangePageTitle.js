import { useEffect } from "react"

export const useChangePageTitle = (title) => {
    useEffect(() => {
        document.title = `${title}`
    }, [title])

}
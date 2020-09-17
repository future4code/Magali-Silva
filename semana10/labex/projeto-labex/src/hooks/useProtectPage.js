import { useHistory } from "react-router-dom"
import { useEffect } from "react";
// import { goToLoginPage } from "../router/goToPages";


export const useProtectPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            // goToLoginPage()
            history.push("/login")
        } 
        
    }, [history])
}
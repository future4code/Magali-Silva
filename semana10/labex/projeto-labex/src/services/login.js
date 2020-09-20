import axios from 'axios';
import { baseUrl } from '../constants/axiosConstants'

export const login = (email, password, history) => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/login/admin");
        window.location.reload(true)
      })
      .catch((error) => {
        console.log(error);
      });
};
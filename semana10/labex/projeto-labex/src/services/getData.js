import axios from 'axios';

export const getData = (url, setData) => {
    axios
        .get(url)
        .then((response) => {
            setData(response.data.trips)
        })
        .catch((error) => {
            console.log(error)
        })
}
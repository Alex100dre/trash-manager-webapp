import axios from 'axios'

// TODO: Use enviroment variables (react env vars should start with REACT_APP_...)
export const TMApi = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    },
})
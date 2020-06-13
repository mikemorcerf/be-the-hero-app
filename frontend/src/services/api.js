import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-backend-js.herokuapp.com',
})

export default api;
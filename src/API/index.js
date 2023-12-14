import axios from 'axios';
const API = axios.create({serverURL: 'http://localhost:6845/'})
API.interceptors.request.use(req => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    } 
    return req;
})
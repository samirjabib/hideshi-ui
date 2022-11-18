import axios from 'axios';


const HIDESHI_API_URL = 'http://127.0.0.1:5173/'


const hideshiApi = axios.create({
    baseURL: HIDESHI_API_URL
});


hideshiApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;

})

export default hideshiApi;
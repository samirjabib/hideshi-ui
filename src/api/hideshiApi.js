import axios from 'axios';
import { getEnvVariables} from '../helpers'

const { HIDESHI_API_URL } = getEnvVariables();


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
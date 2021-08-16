import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_BASE_PATH;
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const API = axios.create();
export const MULTIPART_HEADER_CONFIG = { headers: {'X-Custom-Header': 'value'} };
export const API_MULTIPART = axios.create();
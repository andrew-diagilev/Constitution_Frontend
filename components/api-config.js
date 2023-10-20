import axios from 'axios';
import {store} from "../redux/store";

const api = axios.create({
    baseURL: 'http://217.20.181.185:8080',
});

api.defaults.timeout = 5000;
api.interceptors.request.use(
    async (config) => {

        const state = store.getState();
        const token = state.auth.token;
        if (token) {
            config.headers.Authorization = `Bearer_${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                store.dispatch({type: 'LOGOUT'})
            }
        }
        return Promise.reject(error);

    }
);
export default api;


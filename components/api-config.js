import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
/*import {AuthProvider} from '../components/AuthContext';*/

import {useContext} from "react";
/*const { logout } = useContext(AuthContext);*/

const api = axios.create({
    baseURL: 'http://217.20.181.185:8080',
});

api.interceptors.request.use(
    async (config) => {
        // Добавьте заголовок с авторизацией перед отправкой запроса
console.log(config);
        const token = await AsyncStorage.getItem('jwtToken');
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

        /*   logout();*/

            }
        }
        return Promise.reject(error);
    }
);

export default api;
import axios from 'axios';
import {useDispatch} from "react-redux";
import {store} from "../redux/store";
/*import {logout} from "../redux/authActions";*/


const api = axios.create({
    baseURL: 'http://217.20.181.185:8080',
});
export default function ApiConfig (config, token) {

    // Передаем аргумент config в функцию перехвата запроса
    api.interceptors.request.use(
        async (requestConfig) => {
            // Добавьте заголовок с авторизацией перед отправкой запроса
         /*   const token = getToken();*/
            if (token) {
                requestConfig.headers.Authorization = `Bearer_${token}`;
            }
            return requestConfig;
        },
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    store.dispatch({ type: 'LOGOUT' })
                }
            }
            return Promise.reject(error);
        }
    );

    return api(config); // Возвращаем обработанный запрос с использованием переданного config
};

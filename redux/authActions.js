// authActions.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {executeRequest} from "../components/apiRequests";

// Действие для успешной авторизации
export const loginSuccess = (token) => {
    console.log('Новый токен:', token);
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token,
        },
    };
};

// Действие для выхода из системы
export const logout = () => {
    console.log("logout")
    return async (dispatch) => {
        dispatch({
            type: 'LOGOUT',
        });
    };
};

// Действие для входа в систему
export const login = (username, password) => {
    return async (dispatch) => {

        try {
            const data = await executeRequest('/api/auth/login', 'POST', {}, {username, password});
            if (data.token) {
                dispatch(loginSuccess(data.token));
            }
        } catch (error) {
            console.error('Помилка при авторизації:', error);
        }
    };
};

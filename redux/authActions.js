// authActions.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {executeRequest} from "../components/apiRequests";

// Действие для успешной авторизации
export const loginSuccess = (token, role, userId, username) => {

    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token,
            role,
            userId,
            username,
        },
    };
};

export const loginStart = () => {
    return {
        type: 'LOGIN_START',
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
        dispatch(loginStart());
        try {
            const data = await executeRequest('/api/auth/login', 'POST', {}, {username, password});
            if (data.token) {
                dispatch(loginSuccess(data.token, data.role, data.userId, data.username));
            }
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' });
            console.error('Помилка при авторизації:', error);
        }
    };
};

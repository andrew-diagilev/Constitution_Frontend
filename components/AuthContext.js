import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {executeRequest} from "./apiRequests";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
        const [isLoading, setIsLoading] = useState(false);
        const [token, setToken] = useState(null);

        useEffect(() => {
                isLoggedIn();
            }, []);

        /*          useEffect(() => {
                    const checkToken = async () => {
                      const storedToken = await AsyncStorage.getItem('jwtToken');
                      setToken(storedToken);
                      setIsLoading(false);
                    };

                    checkToken();
                  }, []);*/

        const login = async (username, password) => {
            setIsLoading(true);
            try {
                const data = await executeRequest('/api/auth/login', 'POST', {}, {username, password});
                if (data.token) {
                    setToken(data.token);
                    await AsyncStorage.setItem('jwtToken', data.token);
                    await AsyncStorage.setItem('username', data.username);
                    await AsyncStorage.setItem('role', data.role);
                    await AsyncStorage.setItem('userId', data.userId.toString());
                }
            } catch (error) {
                console.error('Помилка при авторизації:', error);
            }
            setIsLoading(false)
        };

        const logout = async () => {
            setIsLoading(false)
            // Здесь добавьте логику для выхода из системы, удаляя токен из AsyncStorage и очищая состояние
            await AsyncStorage.removeItem('jwtToken');
            await AsyncStorage.removeItem('username');
            await AsyncStorage.removeItem('role');
            await AsyncStorage.removeItem('userId');
            setToken(null);
        };

        const isLoggedIn = async () => {
            try {
                setIsLoading(true);
                let token = await AsyncStorage.getItem('jwtToken');
                setToken(token);
            } catch (error) {
                console.log("Login error");
            }
            setIsLoading(false);
        }


        const authContextValue = {
            token,
            isLoading,
            login,
            logout,
        };

        return (
            <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
        );
    }
;
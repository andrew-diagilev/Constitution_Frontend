import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {executeRequest} from "../components/apiRequests";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigator from '../components/RootNavigator';
import { useAuth } from '../components/AuthContext';

export default function Auth({navigation}) {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   /* const fetchLogin = async () => {
        try {
            const data = await executeRequest('/api/auth/login', 'POST', {}, {username, password});
            await AsyncStorage.setItem('jwtToken', data.token);
            await AsyncStorage.setItem('username', data.username);
            await AsyncStorage.setItem('role', data.role);
        } catch (error) {
            console.error('Помилка при авторизації:', error);
        }
    }*/

    const handleLogin = async () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('Заполните все поля');
            return;
        }
        try {
            await login(username, password); // Вызов функции авторизации
        } catch (error) {
            console.error('Ошибка при авторизации:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Авторизация</Text>
            <TextInput
                style={styles.input}
                placeholder="Логин"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

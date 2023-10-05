import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {executeRequest} from "../components/apiRequests";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigator from '../components/RootNavigator';
import { useAuth } from '../components/AuthContext';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import InfoModal from "../components/InfoModal";
import AuthForm from "../components/Auth/AuthForm"

export default function Auth({navigation}) {
    const { login } = useAuth();
/*    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');*/

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

    const handleLogin = async (username, password) => {
     /*   if (username.trim() === '' || password.trim() === '') {
            alert('Заполните все поля');
            return;
        }*/
        try {
            await login(username, password); // Вызов функции авторизации
        } catch (error) {
            console.error('Ошибка при авторизации:', error);
        }
    };


    return (

        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>
            <View style={[commonStyles.Container, commonStyles.ContainerReg]}>
                <AuthForm onAuth={(username, password)=>handleLogin(username, password)}/>
            </View>
        </ImageBackground>






      /*  <View style={styles.container}>
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
    */);
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

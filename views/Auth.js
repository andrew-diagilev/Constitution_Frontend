import React from 'react';
import {View, ImageBackground} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import AuthForm from "../components/Auth/AuthForm"
import {useDispatch} from 'react-redux';
import {login} from "../redux/authActions";

export default function Auth({navigation}) {
    const dispatch = useDispatch();
    const handleLogin = (username, password) => {
        dispatch(login(username, password));
    };
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>
            <View style={[commonStyles.Container, commonStyles.ContainerReg]}>
                <AuthForm onAuth={(username, password) => handleLogin(username, password)}/>
            </View>
        </ImageBackground>);
};

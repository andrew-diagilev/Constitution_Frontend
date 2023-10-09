import React from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import AuthForm from "../components/Auth/AuthForm"
import {useDispatch, useSelector} from 'react-redux';
import {login} from "../redux/authActions";
import {selectIsLoading} from "../redux/authSelectors";

export default function Auth({navigation}) {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const handleLogin = (username, password) => {
        dispatch(login(username, password));
    };

    if (isLoading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={"large"}/>
            </View>);
    }

    return (<ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
        <View style={[commonStyles.Container, commonStyles.ContainerReg]}>
            <AuthForm onAuth={(username, password) => handleLogin(username, password)}/>
        </View>
    </ImageBackground>);
};

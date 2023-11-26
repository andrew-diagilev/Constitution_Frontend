import React, {useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator, Text, Pressable} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import AuthForm from "../components/Auth/AuthForm"
import {useDispatch, useSelector} from 'react-redux';
import {login} from "../redux/authActions";
import {selectIsLoading, selectLoginError} from "../redux/authSelectors";
import {useErrorModal} from "../components/ErrorModalProvider";
import PressableMessageLink from "../components/common/PressableMessegeLink";

export default function Auth({navigation}) {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const {showErrorModal} = useErrorModal();
    const error = useSelector(selectLoginError);

    useEffect(() => {
        // Сброс isLoading в false при монтировании компонента
        dispatch({type: 'LOGIN_FAILURE', error: null});
        if (error === 401) {
            showErrorModal("Помилка авторизації, перевірте правильність вводу логіну та паролю.")
        }

    }, [error]);

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
        <View style={[commonStyles.Container, commonStyles.ContainerRegCommon]}>
            <AuthForm onAuth={(username, password) => handleLogin(username, password)}/>
            <PressableMessageLink onPress={()=>navigation.navigate("Registration")} MessageText={"У вас нема облікового запису? "} LinkText={"Пройдіть реестрацію"}/>
        </View>
    </ImageBackground>);
};

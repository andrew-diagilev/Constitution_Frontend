import React from "react";
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {useDispatch} from 'react-redux';
import {logout} from "../redux/authActions";
import HeaderLessons from "./Headers";
import {LogoSvg, CatSvg} from "../assets/imgsvg";


export default function Profile({navigation}) {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    const goBack = () => navigation.goBack();
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.HeaderArea}>
                    <HeaderLessons Title={'ПРОФІЛЬ'} IconLeft={CatSvg} IconRight={LogoSvg}/>
                </View>
                <View style={commonStyles.BodyArea}>
                    <View style={commonStyles.ContainerLesson}>
                        <View style={commonStyles.TitleTemp}>
                            <Text style={commonStyles.TitleTempText}>Профіль Користувача</Text>
                            <Text style={styles.Text2}>Ім'я</Text>
                            <Text style={styles.Text1}>Олексій</Text>
                            <Text style={styles.Text2}>Адреса електроної пошти</Text>
                            <Text style={styles.Text1}>oleksii@gmail.com</Text>
                            <Text style={styles.Text2}>Пароль</Text>
                            <Text style={styles.Text1}>Змінити пароль</Text>
                            <Text style={styles.Text2}>Статистика</Text>
                            <Text style={styles.Text1}>Статистика навчання</Text>
                            <Text style={styles.Text2}>Рейтинг</Text>
                            <Text style={styles.Text1}>Загальний рейтинг</Text>

                            <TouchableOpacity style={commonStyles.Button} onPress={handleLogout}>
                                <Text style={commonStyles.ButtonText}>Вийти</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Text1: {

        color: '#00325B',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 0,
    },

    Text2: {

        color: 'gray',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginTop: 0,
    },

});

import React from "react";
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {useDispatch} from 'react-redux';
import {logout} from "../redux/authActions";

export default function Profile({navigation}) {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    const goBack = () => navigation.goBack();
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.BodyArea}>
                    <View style={commonStyles.ContainerLesson}>
                        <View style={commonStyles.TitleTemp}>
                            <Text style={commonStyles.TitleTempText}>Профіль Користувача</Text>
                            <TouchableOpacity style={styles.Button} onPress={handleLogout}>
                                <Text style={styles.ButtonText}>Вийти</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    Button: {
        marginTop: 120,
        height: 50,
        width: 300,
        backgroundColor: '#00325B',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },

    ButtonText: {
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

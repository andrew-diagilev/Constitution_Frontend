import {StatusBar} from 'expo-status-bar';
import React from "react";

import {Button, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import Menu from "./Menu";


export default function Abstracts({navigation}) {
    const goBack = () => navigation.goBack();
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>

            <View style={commonStyles.Container}>

                <View style={commonStyles.BodyArea}>

                    <View style={commonStyles.ContainerLesson}>

                        <View style={commonStyles.TitleTemp}>
                            <Text style={commonStyles.TitleTempText}>Перелік Конспектів</Text>
                        </View>

                    </View>

                </View>
                <Menu navigation={navigation}/>
            </View>
        </ImageBackground>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

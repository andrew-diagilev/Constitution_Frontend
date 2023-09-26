import {StatusBar} from 'expo-status-bar';
import React from "react";

import {Button, StyleSheet, Text, TextInput, View, ImageBackground} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import Menu from "./Menu";


export default function Profile({navigation}) {
    const goBack = () => navigation.goBack();
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>

            <View style={commonStyles.Container}>

                <View style={commonStyles.BodyArea}>

                    <View style={commonStyles.ContainerLesson}>

                        <View style={commonStyles.TitleTemp}>
                            <Text style={commonStyles.TitleTempText}>Профіль Користувача</Text>
                        </View>

                    </View>

                </View>
                <Menu navigation={navigation}/>
            </View>
        </ImageBackground>

    );}

const styles = StyleSheet.create({

});

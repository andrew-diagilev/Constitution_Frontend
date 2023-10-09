import React from "react";
import {
    ImageBackground,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Svg, {Path} from "react-native-svg";
import {commonStyles} from '../assets/styles';
import {LogoSvg, InfoSvg} from '../assets/imgsvg';
import {ImageBg1} from '../assets/imgpaths';
import Menu from "./Menu";

export default function NAV({navigation}) {
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.ContainerNAV}>
                <View style={[commonStyles.LogoNAVBox]}>
                    <LogoSvg SvgStyle={[commonStyles.ColorLogo, commonStyles.Shadow]}/>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Registration')}
                                  style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Реєстрація</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}
                                  style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Привітання</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Main')}
                                  style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Головна</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('LessonsNN')}
                                  style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Уроки</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Menu')}
                                  style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV02, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>МЕНЮ</Text>
                </TouchableOpacity>


            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({});
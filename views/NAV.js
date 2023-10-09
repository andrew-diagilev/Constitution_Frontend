import React from "react";
import {ImageBackground, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Svg, {Path} from "react-native-svg";
import { commonStyles } from '../assets/styles';
import {LogoSvg,InfoSvg} from '../assets/imgsvg';
import { ImageBg1 } from '../assets/imgpaths';
import Menu from "./Menu";

export default function NAV({navigation}) {
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.ContainerNAV}>
                <View style={[commonStyles.LogoNAVBox, commonStyles.Shadow]}>
                    <LogoSvg/>
                </View>

                    {  /*  <Svg width="43" height="59" viewBox="0 0 43 59">

                        <Path d="M41.41,52.89,18,27.12l23.19-23a1.32,1.32,0,0,0,.4-.95,2.45,2.45,0,0,0-.86-1.81A2.92,2.92,0,0,0,38.63.59a4.44,4.44,0,0,0-3.26,1.63L11.47,26.6H9.76v-5a6.11,6.11,0,0,0-1.32-4.34,5.41,5.41,0,0,0-4.08-1.38,3.09,3.09,0,0,0-2.67,1,5.08,5.08,0,0,0-.7,3V54.3a5.08,5.08,0,0,0,.7,3,3.12,3.12,0,0,0,2.67,1h.36a8.07,8.07,0,0,0,1-.06h0l.25,0c.32,0,.62-.08.88-.14a3.35,3.35,0,0,0,1.67-.84,3.55,3.55,0,0,0,.93-1.73c0-.16.07-.33.11-.51a9.72,9.72,0,0,0,.18-2V31.09h1.71L31.88,54.28a13.26,13.26,0,0,0,3.79,3.15,7.92,7.92,0,0,0,3.51.82,3.32,3.32,0,0,0,2.43-.9,2.85,2.85,0,0,0,.91-2.12A3.6,3.6,0,0,0,41.41,52.89Z" fill="white" />
                        <Path d="M1.52,8.93a5,5,0,0,0,3.67,1.53,4.89,4.89,0,0,0,2-.42A5.3,5.3,0,0,0,8.87,8.91a5.38,5.38,0,0,0,.89-1.18A4.44,4.44,0,0,0,10,7.24a4.89,4.89,0,0,0,.41-2,4.83,4.83,0,0,0-.43-2A5.59,5.59,0,0,0,8.85,1.56,5.65,5.65,0,0,0,7.18.43a4.89,4.89,0,0,0-4,0A5.82,5.82,0,0,0,1.52,1.56,5.54,5.54,0,0,0,.41,3.23a5.15,5.15,0,0,0-.41,2A5,5,0,0,0,1,8.3,5.2,5.2,0,0,0,1.52,8.93Z" fill="white" />
                    </Svg>*/}


                <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Реєстрація</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Привітання</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Головна</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigation.navigate('LessonsNN')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Уроки</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV02, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>МЕНЮ</Text>
                </TouchableOpacity>

                { /* <TouchableOpacity onPress={() => navigation.navigate('Lessons')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV02, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Уроки</Text>
                </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('LessonsN')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV01, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Уроки Новые</Text>
                </TouchableOpacity>


              <TouchableOpacity onPress={() => navigation.navigate('Popup')} style={[commonStyles.ButtonNAV, commonStyles.ButtonNAV03, commonStyles.Shadow]}>
                    <Text style={commonStyles.ButtonNAVText}>Попап</Text>
                </TouchableOpacity>*/}



            </View>
        </ImageBackground>

        );}

const styles = StyleSheet.create({





});
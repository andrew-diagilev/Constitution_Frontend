import React from "react";
import {ImageBackground, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Svg, {Path} from "react-native-svg";


const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};


export default function NAV({navigation}) {
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={styles.ImageBg1}>
            <View style={styles.Container}>

                <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={[styles.Button, styles.Button01]}>
                    <Text style={styles.ButtonText}>Реєстрація</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={[styles.Button, styles.Button01]}>
                    <Text style={styles.ButtonText}>Привітання</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={[styles.Button, styles.Button01]}>
                    <Text style={styles.ButtonText}>Головна</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LessonsN')} style={[styles.Button, styles.Button01]}>
                    <Text style={styles.ButtonText}>Уроки Новые</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lessons')} style={[styles.Button, styles.Button02]}>
                    <Text style={styles.ButtonText}>Уроки</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Popup')} style={[styles.Button, styles.Button03]}>
                    <Text style={styles.ButtonText}>Попап</Text>
                </TouchableOpacity>




            </View>




        </ImageBackground>

        );}

const styles = StyleSheet.create({


    ImageBg1: {
      flex: 1,
        verticalAlign:'top',
      //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },


    Container: {
        flex: 1,
        paddingTop: 100,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
    },

    Button: {
        height:60,
        width: 300,
       // margin: 4,
        marginTop:16,
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
    Button01: {
        backgroundColor: '#7B68EE',
    },

    Button02: {
        backgroundColor: '#00325B',
    },

    Button03: {
        backgroundColor: '#00CED1',
    },

    ButtonText: {

        color:'#ffffff',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Philosopher',
        fontStyle:'italic',
        fontSize: 18,
        fontWeight:'bold',



    },
    Image: {

        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        resizeMode: 'stretch'

    },
    Shadow: {
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },

});
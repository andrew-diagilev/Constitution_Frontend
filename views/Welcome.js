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
    ScrollView,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Svg, {Path} from "react-native-svg";


const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset33.png'};


export default function Registration({navigation}) {
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={styles.ImageBg1}>
            <View style={styles.Container}>


                <View style={styles.Cat}>
                <View style={styles.Round}>
                    <Image source={Image1} style={styles.Image1} />
                </View></View>

                <Text style={styles.Text1}>Олексію</Text>
                <Text style={styles.Text2}>Вітаємо</Text>
                <Text style={styles.Text3}>Реєстрація прошла успішно.</Text>
                <Text style={styles.Text3}>Тепер можна перейти до навчяння.</Text>

                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('LessonsN')}>
                    <Text style={styles.ButtonText}>Розпочати навчання</Text>
                </TouchableOpacity>




            </View>




        </ImageBackground>

    );}

const styles = StyleSheet.create({


    Cat:{

        alignItems: 'center',
        justifyContent: 'center'
    }, // Выравнивание по центру по горизонтали},

    Round: {
        height:180,
        width: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: '100%',
        alignItems: 'center',
        // verticalAlign:"middle",
        justifyContent: 'center', // Выравнивание по центру по горизонтали
       // marginLeft: -10,
        // marginRight: 10,

    },

    ImageBg1: {
        flex: 1,
        verticalAlign:'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },

    Image1: {

        width: 120,
        height: 161,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },

    Image2: {

        width: 44,
        height: 44,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 70,
    },

    Text1: {

        color:'#00325B',
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 30,
        marginTop: 20,
    },

    Text2: {

        color:'#FA4562',
        textAlign:'center',
        fontFamily:'PhilosopherBold',
        fontSize: 56,

    },

    Text3: {

        color:'#00325B',
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 18,
        //marginTop: 20,
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
        marginTop: 120,
        height:50,
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

        color:'#ffffff',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Roboto',
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
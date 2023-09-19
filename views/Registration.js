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
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset22.png'};
const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset27.png'};

export default function Registration({navigation}) {
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={styles.ImageBg1}>
            <View style={styles.Container}>

                <Image source={Image1} style={styles.Image1} />

                <Text style={styles.Text1}>Вивчаємо</Text>
                <Text style={styles.Text2}>КОНСТИТУЦІЮ</Text>

                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.ButtonText}>Зареєструватись</Text>
                </TouchableOpacity>


                <Image source={Image2} style={styles.Image2} />
                <Text style={styles.Text3}>Освітня програма для дітей</Text>

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
        fontFamily:'PhilosopherBold',
        fontSize: 40,
        marginTop: 20,
    },

    Text2: {

        color:'#00325B',
        textAlign:'center',
        fontFamily:'PhilosopherBold',
        fontSize: 40,

    },

    Text3: {

        color:'#ffffff',
        textAlign:'center',
        fontFamily:'PhilosopherBold',
        fontSize: 18,
        marginTop: 20,
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
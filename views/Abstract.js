import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from "react";
import {executeRequest} from "../components/apiRequests";

import {ImageBackground, Button, StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';


export default function Abstract({route}) {
    const [abstract, setAbstract] = useState([]);
    const lessonId = route.params;
    console.log(route.params);
    useEffect(() => {
        fetchAbstract();
    }, []);

    const fetchAbstract = async () => {
        try {
            const data = await executeRequest('/api/summaries/'+lessonId);
          /*  if (!response.ok) {
                const errorData = await response.text(); // Получаем тело ответа из ошибки
                throw new Error(`Запит завершився помилкою ${response.status}: ${errorData}`);
            }*/
            setAbstract(data);
        } catch (error) {
            console.error('Ошибка при получении даних:', error);
        }
    };
    const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
    return (

        <ImageBackground source={ImageBg1} resizeMode="cover" style={styles.ImageBg1}>
            <ScrollView style={styles.SV} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={styles.Container}>
                    <Text style={styles.Title}>Кокспект до Уроку 0</Text>
                    <Text style={styles.Text}>{abstract.text}</Text>
                </View>
            </ScrollView>
        </ImageBackground>


    )
        ;
}

const styles = StyleSheet.create({

    ImageBg1: {
        flex: 1,
       // verticalAlign:'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },
    SV: {
        flex: 1,
     //   paddingTop: 100,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },

    Container: {
        flex: 1,
        paddingTop: 100,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '90%',
    },


    Title: {
        color:'#00325B',
      //  textAlign:'center',
        fontFamily:'PhilosopherBold',
        fontSize: 22,
        marginTop: 20,
    },

    Text: {

        color:'#00325B',
        //textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 18,
        marginTop: 20,
    },

});

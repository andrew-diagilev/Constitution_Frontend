import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import {ImageBackground, Image, FlatList, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Svg, { Path } from 'react-native-svg';


const image1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const image2 = {uri: 'https://opossum.com.ua/constitution/Asset21.png'};


export default function Lessons({navigation}) {
    const goBack = () => navigation.goBack();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetchLessons();
    }, []);

    const fetchLessons = async () => {
        try {
            const response = await fetch('http://217.20.181.185:8080/api/lessons');
            const data = await response.json();
            setLessons(data);
        } catch (error) {
            console.error('Ошибка при получении уроков:', error);
        }
    };

    return (
        <View style={styles.Container}>

            <ImageBackground source={image1} resizeMode="cover" style={styles.ImageBg1}>
                <Image
                    style={[styles.image, styles.shadow]}
                    source={{
                        uri: 'https://opossum.com.ua/constitution/Asset14.png',
                    }}
                />

                <FlatList style={styles.FL} data={lessons} renderItem={({item}) => (
                    <View style={styles.Card}>
                    <View style={styles.LessonCard}>


                        <View style={styles.LessonCardHeader}>

                            <View style={styles.LessonCardHeaderLeft}>

                                <Text style={styles.TextHeaderLeft}>{item.name}</Text>

                            </View>

                            <View style={styles.LessonCardHeaderRight}>

                                <View style={styles.Round}>

                                    <Image
                                        style={styles.image1}
                                        source={{
                                            uri: 'https://opossum.com.ua/constitution/Asset19.png',
                                        }}
                                    />

                                </View>

                            </View>

                        </View>

                        <View style={styles.LessonCardFooter}>

                            <View style={styles.LessonCardFooterLeft}>

                                <Text style={styles.TextTitle}>{item.title}</Text>

                            </View>

                            <View style={styles.LessonCardFooterRight}>


                                <TouchableOpacity onPress={() => navigation.navigate('Lesson', item)} style={[styles.Button]}>
                                    <Text style={styles.TextButton}>До Уроку</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                    </View>
                )}/>


            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    Round: {
        height:30,
        width: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        alignItems: 'center',
        verticalAlign:"middle",
        marginRight: 10,

    },

    ImageBg1: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        justifyContent: "flex-start",

    },

    ImageBg2: {
        // flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // justifyContent: "flex-start",
        borderRadius: 25,


    },

    image: {
        width: 100,
        height: 100,
        marginTop:20,
        marginBottom:20,
    },

    image1: {
        width: 20,
        height: 20,
        marginTop:4,
    },

    Button: {
        backgroundColor: '#00325B',
        height:30,
        width: 100,
        margin: 4,
        //padding:10,
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
        },},

    TextButton:{

        color:"#ffffff",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize: 14,
        fontWeight:"600"},

    TextTitle:{
        paddingLeft: 10,
        color:"#00325B",
        textAlign:"left",
        textAlignVertical:"center",
        fontSize: 16,
        fontWeight:"600"},

    TextHeaderLeft:{
        paddingLeft: 10,
        color:"#00325B",
        textAlign:"left",
        textAlignVertical:"center",
        fontSize: 18,
        fontWeight:"700"},

    TextHeaderRight:{
        paddingLeft: 10,
        color:"#00325B",
        textAlign:"left",
        textAlignVertical:"center",
        fontSize: 18,
        fontWeight:"600"},

    Container: {
        flex: 1,
       // paddingTop: 10,
       // paddingBottom: 10,
        // backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        opacity:1,


    },

    FL:{
        paddingTop: 10,
        paddingBottom: 10,
        // flex: 1,
        width: '100%',
        //  height: 400,
        // backgroundColor: '#40E0D0',
        //alignItems: 'center',
        display:'flex',
        flexDirection: 'column',
       // justifyContent: 'center',
    },


    Card:{

       // display:'flex',
       width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

    },


    LessonCard:{
        // flex:1,
       marginTop: 20,
        marginLef: 40,
        marginRight: 10,
       // paddingBottom: 10,
        alignItems: 'center',
       // width: '100%',
        //  height: 120,
        backgroundColor: '#B3BBDF',
        borderRadius: 25,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    LessonCardHeader:{
        //   paddingTop: 10,
        //    paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        //   backgroundColor: '#8E44AD',
        // flex: 1,
        display:'flex',
        flexDirection: 'row',

    },

    LessonCardFooter:{
        //paddingTop: 10,
        // paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        display:'flex',
        flexDirection: 'row',
        borderRadius: 25,

    },

    LessonCardHeaderLeft:{
        //paddingTop: 10,
        flex: 1,
        // width: '90%',
        //height: 40,
        //    backgroundColor: '#F1C40F',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',
        justifyContent: 'center',



    },

    LessonCardHeaderRight:{
        // paddingTop: 10,
        flex: 1,
        //width: '90%',
        // height: 40,
        //   backgroundColor: '#17A589',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    LessonCardFooterLeft:{
        //paddingTop: 10,
        flex: 2,
        // width: '90%',
        //height: 40,
        //  backgroundColor: '#F1C40F',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',

    },

    LessonCardFooterRight:{
        //paddingTop: 10,
        flex: 1,
        // width: '90%',
        // height: 40,
        //  backgroundColor: '#17A589',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },



    shadow: {
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

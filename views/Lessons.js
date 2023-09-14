import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import {
    ImageBackground,
    Image,
    FlatList,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';



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


                {/*<FlatList style={styles.FL} data={lessons} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} renderItem={({item} ) => (*/}
                <ScrollView style={styles.FL} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                    <Image
                        style={[styles.image, styles.shadow]}
                        source={{
                            uri: 'https://opossum.com.ua/constitution/Asset14.png',
                        }}
                    />
                        {lessons.map((lesson) => {
                            return (
                                <View style={styles.LessonCard}>
                                    <View style={styles.LessonCardHeader}>
                                        <View style={styles.LessonCardHeaderLeft}>
                                            <Text style={styles.TextHeaderLeft}>{lesson.name}</Text>
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
                                            <Text style={styles.TextTitle}>{lesson.title}</Text>
                                        </View>
                                        <View style={styles.LessonCardFooterRight}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Lesson', lesson)} style={[styles.Button]}>
                                                <Text style={styles.TextButton}>До Уроку</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View></View>);
                        })}
                            </ScrollView>
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
        // backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        opacity:1,


    },

    FL:{marginLeft: 60,
        marginRight: 60,
        paddingTop: 10,
        paddingBottom: 10,
        // flex: 1,
        width: '100%',
        //  height: 400,
        // backgroundColor: '#40E0D0',
        //alignItems: 'center',
    },

    LessonCard:{
        // flex:1,
        marginTop: 10,
        //  paddingBottom: 10,
        alignItems: 'center',
        width: '96%',
        //  height: 120,
        backgroundColor: '#B3BBDF',
        borderRadius: 25,
        display:'flex',
        flexDirection: 'column',
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












































/*
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


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
        <View style={styles.container}>
           <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0.8, y: 0.8}}
                colors={['rgba(127, 172, 240, 1)', 'rgba(155, 127, 240, 1)', 'transparent']}
                style={styles.background}
            />
            <FlatList style={{width:'100%'}} data={lessons} renderItem={({item}) => (
                <View style={styles.LessonCard}>
                    <View style={styles.LessonCardHeader}>
                        <Text style={styles._5}>{item.name}</Text>
                    </View>
                    {/!*<View style={styles.Group959}>

                        </View>*!/}
                    {/!* <View style={styles.BarsTabBarXGlyph}>
                            <Text style={styles.Symbol}>􀋃</Text>
                        </View>*!/}
                    <View style={styles.descriptionContainer}><Text
                        style={styles.DescriptionText}>{item.title}</Text></View>


                    <TouchableOpacity onPress={() => navigation.navigate('Lesson', item)}
                                      style={{
                                       //   backgroundColor: '#36ad91',
                                       //   borderRadius: 20,
                                       //   width: 160,
                                        //  height: 40,
                                        //  justifyContent: "center",
                                        //  alignItems: "center",
                                      }}>
                        <Text style={{textAlign: 'center'}}>Розпочати навчання</Text>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    background_: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },

    container: {
     flex: 1,
       flexDirection: 'column',
       // backgroundColor: '#a494d2',
     alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    LessonCard: {
     // flex: 1,
     // flexDirection: 'column',
     //   borderRadius: 25,
      //  display: "flex",
    //justifyContent: "flex-start",
       // justifyContent: 'center',
      //alignItems: "center",
        // width: '70%',
      height: 100,
       // marginTop: 12,
       // marginLeft: 10,
       // marginRight: 100,
       // paddingBottom: 21,
      //  marginBottom: 12,
    // boxSizing: "border-box",
        backgroundColor: '#fff',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,

    },
    LessonCardHeader: {
       // paddingLeft: 20,
       // paddingTop: 20,
      //  height: 60,
       // width: '100%',
      //  borderTopLeftRadius: 25,
      //  borderTopRightRadius: 25,
      //  backgroundColor: '#b3c7d5',
       // align: "center",
    },
    descriptionContainer: {
       // paddingTop: 40,
    },

    Group959: {
        display: "flex",
        flexDirection: "column",
        height: 100,
        boxSizing: "border-box",
    },
    _5: {

        fontSize: 15,
        fontWeight: "700",
    },
    DescriptionText: {
        color: "rgb(11,45,77)",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 700,
    },
    BarsTabBarXGlyph: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 100,
        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 5,
        paddingBottom: 4.24,
        boxSizing: "border-box",
    },
    Symbol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(26,109,34,1)",
        fontSize: 17,
        lineHeight: 17,
        fontWeight: 400,
        textAlign: "center",
        letterSpacing: 0,
    }

});
*/

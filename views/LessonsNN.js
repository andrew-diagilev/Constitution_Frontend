import React, {useEffect, useState} from "react";
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
import {executeRequest} from "../components/apiRequests";
import { commonStyles } from '../assets/styles';
import {LogoSvg,InfoSvg, ArrowSvg, ArrowLeftSvg, ArrowRightSvg, TreeSvg, StarSvg, TreeSvgMenu} from '../assets/imgsvg';
import { ImageBg1, ImageBg2, Lesson1 } from '../assets/imgpaths';
import Menu from "./Menu";
import { useNavigation } from '@react-navigation/native';

//const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset23.png'};
const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset30.png'};
const Image3 = {uri: 'https://opossum.com.ua/constitution/Asset28.png'};



export default function LessonsNN({navigation}) {

    const goBack = () => navigation.goBack();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetchLessons();
    }, []);

    const fetchLessons = async () => {
        try {
            const data = await executeRequest('/api/lessons', 'GET');
            setLessons(data);
        } catch (error) {
            console.error('Помилка при отриманні уроків:', error);
        }
    };


    return (
        <ImageBackground source={ImageBg2} resizeMode="cover" style={commonStyles.ImageBg1}>
            <View style={commonStyles.Container}>

                { /*  <View style={commonStyles.TreeSvgContainer}>
                    <View style={[commonStyles.TreeSvgBox, commonStyles.Shadow]}>
                        <TreeSvgMenu/>
                    </View>
                </View>*/}
                <View style={[commonStyles.TreeSvgBox, commonStyles.Shadow]}>
                    <TreeSvgMenu/>
                </View>
                  <Image source={Image1} style={styles.Image1}/>


                <View style={commonStyles.BodyArea}>

                    <View style={commonStyles.ContainerLessons}>



                        <ScrollView style={styles.FL} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center', }}>





                            {lessons.map((lesson) => {
                                return (





















                                    <TouchableOpacity onPress={() => navigation.navigate('LessonN', lesson)} style={{marginBottom: 10,marginTop:10}}>
                                        <View style={[commonStyles.LessonsCard, commonStyles.Shadow]}>
                                            <View style={[commonStyles.LessonsCardLeft]}>
                                                <View style={[commonStyles.Image,commonStyles.Shadow]}>
                                                    <Image style={[commonStyles.Image]} source={Lesson1}/>
                                                </View>
                                            </View>

                                            <View style={commonStyles.LessonsCardRight}>
                                                <View style={commonStyles.LessonsCardRightContainer}>

                                                    <View style={[commonStyles.LessonsCardRightItem1]}>

                                                        <View style={[styles.Stat, commonStyles.Shadow]}>
                                                            <View style={[styles.InfoTable]}>
                                                                <Text style={styles.TextHeaderRight}>0 / 5</Text>
                                                            </View>
                                                            <View style={[styles.Round]}>
                                                                {/* <Image source={Image3} style={styles.Image3} /> */}
                                                                <StarSvg/>
                                                            </View>
                                                        </View>


                                                    </View>
                                                    <View style={[commonStyles.LessonsCardRightItem2]}>
                                                        <Text style={commonStyles.TitleLessonCard}>{lesson.name}</Text>
                                                        <View style={commonStyles.line} />
                                                        <Text style={commonStyles.DscLessonCard}>{lesson.title}</Text>
                                                    </View>
                                                    <View style={[commonStyles.LessonsCardRightItem3]}>
                                                        <View style={[commonStyles.ArrowSvgBox, commonStyles.Shadow]}>

                                                            <ArrowRightSvg/>
                                                        </View>
                                                    </View>
                                                </View>

                                            </View>

                                        </View>

                                    </TouchableOpacity>









                                );
                            })}








                        </ScrollView>
                    </View>

                </View>

                <Menu navigation={navigation}/>



            </View>

       </ImageBackground>

    );}

const styles = StyleSheet.create({




    Container: {
        flex: 1,
        //  paddingTop: 100,
        //  verticalAlign:'top',
        // backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },




    ImageBg2: {
        flex: 1,
        resizeMode: 'cover', // Растягивает изображение, чтобы оно покрыло всю область
        width: '100%', // Ширина изображения равна ширине родительской View
        height: '100%', // Высота изображения равна высоте родительской View
        position: 'absolute',
        borderRadius: 20,
    },

    Image1: {

        width: 90,
        height: 88,
        alignItems: 'center',
    },

    Image3: {

        width: 20,
        height: 16,
        alignItems: 'center',
        alignSelf: 'center'
    },




    FL:{
        // marginLeft: 60,
        // marginRight: 60,
        // paddingTop: 10,
        // paddingBottom: 100,
        //flex: 1,
        width: '100%',
        //  height: 400,
        //  backgroundColor: '#40E0D0',


    },



    LessonCard:{
        // flex:1,
        marginTop: 20,
        //  paddingBottom: 10,
        alignItems: 'center',
        width: '88%',
        //  height: 120,
        // backgroundColor: '#40E0D0',
        borderRadius: 20,
        display:'flex',
        flexDirection: 'column',
    },

    LessonCardHeader:{
        //   paddingTop: 10,
        //    paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        //  backgroundColor: '#AFEEEE',
        flex: 1,
        display:'flex',
        flexDirection: 'row',

    },

    LessonCardHeaderLeft:{
        //paddingTop: 10,
        flex: 1,
        width: '40%',
        //height: 40,
        //  backgroundColor: '#F1C40F',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',

    },

    LessonCardHeaderRight:{
        // paddingTop: 10,
        //flex: 1,
        // width: '40%',
        // height: 40,
        //   backgroundColor: '#17A589',
        // flex: 1,
        //  display:'flex',
        // flexDirection: 'row',
        //  justifyContent: 'center',
        verticalAlign:"middle",
        //justifyContent: "flex-end",
        // alignItems: "flex-end",
    },


    Stat:{
        // paddingTop: 10,
        //flex: 1,
        // width: '40%',
        // height: 40,
        //  backgroundColor: '#17A589',
        //flex: 1,
        //  display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        verticalAlign:"middle",
        //justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 10,

    },




    LessonCardFooter:{
        //   paddingTop: 10,
        //    paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        flex: 1,
        display:'flex',
        flexDirection: 'row',
        borderRadius: 20,

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
        //    backgroundColor: '#17A589',
        //flex: 1,
        // display:'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },




    Button: {
        backgroundColor: '#00325B',
        height:30,
        width: 100,
        margin: 4,
        //padding:10,
        borderRadius: 10,
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
        alignItems: 'center',
        fontSize: 18,
        fontWeight:"700"},

    TextHeaderRight:{
        marginTop:2,
        // paddingLeft: 10,
        color:"#00325B",
        alignItems: 'center',
        textAlignVertical:"center",
        fontSize: 12,
        fontWeight:"600"},

    Round: {
        height:30,
        width: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        // alignItems: 'center',
        // verticalAlign:"middle",
        justifyContent: 'center', // Выравнивание по центру по горизонтали
        marginLeft: -10,
        // marginRight: 10,
        padding:4,

    },

    InfoTable:{
        height:20,
        width: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        alignItems: 'center',
       verticalAlign:"middle",

        // marginRight: 10,

    },

});
import {StatusBar} from 'expo-status-bar';
import React from "react";
import {Video} from 'expo-av';
import {
    ImageBackground,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {commonStyles} from "../assets/styles";
import { Dimensions } from 'react-native';
import {
    LogoSvg,
    InfoSvg,
    ArrowSvg,
    ArrowLeftSvg,
    ArrowRightSvg,
    TreeSvg,
    StarSvg,
    TreeSvgMenu,
    CirclePlaySvg
} from '../assets/imgsvg';
import Menu from "./Menu";
import {ImageBg2,ImageBg1, Lesson1w} from "../assets/imgpaths";


export default function LessonN({navigation, route}) {
    const goBack = () => navigation.goBack();
    const lesson = route.params;
    console.log(lesson);
    // Здесь можно использовать значение lessonId
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [initialPlayStatus, setInitialPlayStatus] = React.useState(true);

    const handleImagePress = () => {
        if (status.isPlaying) {
            video.current.pauseAsync();
        } else {
            video.current.playAsync();
        }
        setInitialPlayStatus(false); // Скрыть картинку после первого нажатия
    };

  //  const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
    const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset30.png'};
    const Image3 = {uri: 'https://opossum.com.ua/constitution/Asset28.png'};

    const screenWidth = Dimensions.get('window').width;
    const VideoWidth = screenWidth*0.88;
    const VideoHeight = Math.round(VideoWidth/1.77);
    console.log('Ширина экрана: ', screenWidth);
    console.log('Ширина видео: ', VideoWidth);
    console.log('Высота видео: ', VideoHeight);


    return (

        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>

            <View style={commonStyles.Container}>

                    <View style={commonStyles.BodyArea}>

                        <View style={commonStyles.ContainerLesson}>



                                <View style={commonStyles.LessonCard}>
                                    {/*  <Image source={Image2} resizeMode="cover" style={styles.ImageBg2}/>*/}
                                    <View style={commonStyles.LessonCardHeader}>
                                        <View style={commonStyles.LessonCardHeaderLeft}>
                                            <Text style={commonStyles. IdTextLesson}>Урок {lesson.id}</Text>
                                            <View style={commonStyles.LineLesson} />
                                            <Text style={commonStyles.TitleTextLesson}>{lesson.title}</Text>
                                        </View>
                                        <View style={styles.LessonCardHeaderRight}>
                                            <View style={commonStyles.RoundLesson}>
                                                <StarSvg/>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={commonStyles.LessonCardFooter}>


                                        <View>
                                            {initialPlayStatus && (
                                                <View style={commonStyles.thumb}>
                                                    <TouchableOpacity onPress={handleImagePress}>
                                                        <Image style={{width: '100%', height: VideoHeight,}} source={Lesson1w}/>
                                                         <View style={[commonStyles.CirclePlayBox, commonStyles.Shadow]}>
                                                            <CirclePlaySvg/>
                                                        </View>

                                                    </TouchableOpacity>
                                                </View>)}
                                            <Video
                                                ref={video}
                                                style={{
                                                    alignSelf: 'center',
                                                    width: '100%',
                                                    height: VideoHeight,
                                                    zIndex: 1,}}
                                                source={{
                                                    uri: lesson.videoUrl,
                                                }}
                                                useNativeControls
                                                resizeMode="contain"
                                                isLooping={false}
                                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                                            />
                                        </View>

                                        <View style={commonStyles.DscLesson}>
                                            <Text style={commonStyles.DscTextLesson}>{route.params.description}</Text>
                                        </View>

                                        <View style={commonStyles.ButtonsLesson}>
                                            <TouchableOpacity style={[commonStyles.ButtonLesson, commonStyles.Shadow]} onPress={() => navigation.navigate('Test', lesson.id)}>
                                                <Text style={commonStyles.ButtonTextLesson}>Перейти до тесту</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[commonStyles.ButtonLesson,commonStyles.Shadow]} onPress={() => navigation.navigate('Abstract', lesson.id)}>
                                                <Text style={commonStyles.ButtonTextLesson}>Подивитись конспект</Text>
                                            </TouchableOpacity>

                                        </View>



                                    </View>

                                </View>




































                        </View>

                    </View>
                    <Menu navigation={navigation}/>





            </View>
        </ImageBackground>

    )
        ;
}

const styles = StyleSheet.create({

    FL:{
        // marginLeft: 60,
        // marginRight: 60,
        // paddingTop: 10,
        // paddingBottom: 100,
        flex: 1,
        width: '100%',
        //  height: 400,
        //  backgroundColor: '#40E0D0',
        //justifyContent: 'center',
        alignItems: 'center',

    },

    Image3: {

        width: 22,
        height: 19,
        alignItems: 'center',
        alignSelf: 'center'
    },

    ImageBg2: {
        flex: 1,
        resizeMode: 'cover', // Растягивает изображение, чтобы оно покрыло всю область
        width: '100%', // Ширина изображения равна ширине родительской View
        height: '100%', // Высота изображения равна высоте родительской View
        position: 'absolute',
        borderRadius: 20,
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




    ImageBg1: {
        flex: 1,
        verticalAlign:'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },


    Container: {
        flex: 1,
        paddingTop: 80,
      //  verticalAlign:'top',
       // backgroundColor: '#ffffff',
        alignItems: 'center',
         justifyContent: 'center',
        width:'100%',
    },












    Description: {
        fontSize: 30,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },



});

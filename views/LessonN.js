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

    const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
    const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset30.png'};
    const Image3 = {uri: 'https://opossum.com.ua/constitution/Asset28.png'};
    return (

        <ImageBackground source={ImageBg1} resizeMode="cover" style={styles.ImageBg1}>
            <View style={styles.Container}>
                <View style={styles.FL} >



                            <View style={styles.LessonCard}>
                                <Image source={Image2} resizeMode="cover" style={styles.ImageBg2}/>
                                <View style={styles.LessonCardHeader}>
                                    <View style={styles.LessonCardHeaderLeft}>
                                        <Text style={styles.Text1}>Урок {lesson.id}</Text>
                                    </View>
                                    <View style={styles.LessonCardHeaderRight}>



                                            <View style={styles.Round}>
                                                <Image source={Image3} style={styles.Image3} />
                                            </View>


                                    </View>
                                </View>
                                <View style={styles.LessonCardFooter}>

                                    <Text style={styles.Text2}>{lesson.title}</Text>
                                    <View>
                                        {initialPlayStatus && (
                                            <View style={styles.thumb}>
                                                <TouchableOpacity onPress={handleImagePress}>
                                                    <Image style={{width: '100%', height: '100%'}} source={require('../assets/prev.png')}/>
                                                </TouchableOpacity>
                                            </View>)}
                                        <Video
                                            ref={video}
                                            style={styles.video}
                                            source={{
                                                uri: lesson.videoUrl,
                                            }}
                                            useNativeControls
                                            resizeMode="contain"
                                            isLooping={false}
                                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                                        />
                                    </View>
                                    <View style={styles.Description}>
                                        <Text style={styles.Text3}>{route.params.description}</Text>
                                    </View>


                                </View>

                            </View>



                    <View style={styles.Buttons}>
                        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Test', lesson.id)}>
                            <Text style={styles.buttonText}>Перейти до тесту</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Abstract', lesson.id)}>
                            <Text style={styles.buttonText}>Подивитись конспект</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Main')}>
                            <Text style={styles.buttonText}>До головного Меню</Text>
                        </TouchableOpacity>
                    </View>






                </View>
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
        //alignItems: 'center',
       // justifyContent: 'center',
        width: '100%',
        height: 60,
       // backgroundColor: '#AFEEEE',
      // flex: 1,
      //  display:'flex',
      flexDirection: 'row',

    },

    LessonCardHeaderLeft:{
        //paddingTop: 10,
        flex: 1,
        width: '80%',
        //height: 40,
     //   backgroundColor: '#F1C40F',
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
      //  verticalAlign:"middle",
        //justifyContent: "flex-end",
        // alignItems: "flex-end",
    },


    LessonCardFooter:{
        //   paddingTop: 10,
        //    paddingBottom: 10,
       // alignItems: 'center',
       // justifyContent: 'center',
       width: '100%',
       // height: 50,
        backgroundColor: '#ffffff',
       // flex: 1,
      //  display:'flex',
       // flexDirection: 'row',
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

    Round: {
        height:30,
        width: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        // alignItems: 'center',
        // verticalAlign:"middle",
        justifyContent: 'center', // Выравнивание по центру по горизонтали
        //marginLeft: -10,
        marginRight: 15,
        marginTop: 15,

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


    Text1: {

        color:'#00325B',
        textAlign:'left',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontSize: 20,
        marginLeft:15,
        marginTop:15,
       },

    Text2: {

        color:'#00325B',
        textAlign:'left',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontSize: 22,
        marginLeft:15,
        marginTop: 15,
        marginBottom: 15,
    },

    Text3: {

        color:'#00325B',
        textAlign:'left',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontSize: 18,
    },

    Buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },




    video: {
        alignSelf: 'center',
        width: '100%',
        height: 225,
        zIndex: 1,
    },

    thumb: {
        alignSelf: 'center',
        position: "absolute",

        width: '100%', // Установите желаемую ширину, такую же, как у видео
        height: 225, // Установите желаемую высоту, такую же, как у видео
        /*        alignItems: 'center',
                justifyContent: 'center',*/
        zIndex: 2,

    },
    Description: {
        fontSize: 30,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Button: {
      //  marginLeft: 10,
      //  marginRight: 10,
      //  backgroundColor: 'green',
      //  borderRadius: 10,
      //  paddingVertical: 12,
       // paddingHorizontal: 24,
       // marginBottom: 16,
        borderRadius: 20,
       padding: 10,
        margin:10,
        backgroundColor: '#00325B',
        width: 100,
        height: 100,
        alignItems: 'center',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        justifyContent: 'center',
        alignSelf:'center',
        textAlign:'center',
    },

    buttonText: {
        fontFamily:'Roboto',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign:'center',
    },
});

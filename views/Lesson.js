import React from "react";
import {Video} from 'expo-av';
import {ImageBackground, Text, View, TouchableOpacity, Image} from 'react-native';
import {commonStyles} from "../assets/styles";
import {Dimensions} from 'react-native';
import {LogoSvg, TreeSvg, StarRegularSvg, CirclePlaySvg} from '../assets/imgsvg';
import {ImageBg2, ImageBg1, Lesson1w} from "../assets/imgpaths";
import HeaderLessons from "./Headers";


export default function Lesson({navigation, route}) {
    const lesson = route.params;
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
    const VideoWidth = screenWidth * 0.88;
    const VideoHeight = Math.round(VideoWidth / 1.77);
    // console.log('Ширина экрана: ', screenWidth);
    // console.log('Ширина видео: ', VideoWidth);
    // console.log('Высота видео: ', VideoHeight);

    return (<ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.HeaderArea}>
                    <HeaderLessons Title={'УРОКИ'} IconLeft={TreeSvg} IconRight={LogoSvg}/>
                </View>
                <View style={commonStyles.BodyArea}>
                    <View style={commonStyles.ContainerLesson}>
                        <View style={commonStyles.LessonCard}>
                            {/*  <Image source={Image2} resizeMode="cover" style={styles.ImageBg2}/>*/}
                            <View style={commonStyles.LessonCardHeader}>
                                <View style={commonStyles.LessonCardHeaderLeft}>
                                    <Text style={commonStyles.IdTextLesson}>Урок {lesson.id}</Text>
                                    <View style={commonStyles.LineLesson}/>
                                    <Text style={commonStyles.TitleTextLesson}>{lesson.title}</Text>
                                </View>
                                <View style={commonStyles.LessonCardHeaderRight}>
                                    <View style={commonStyles.RoundLesson}>
                                        <StarRegularSvg SvgStyle={commonStyles.ColorStar}/>
                                    </View>
                                </View>
                            </View>
                            <View style={commonStyles.LessonCardFooter}>
                                <View>
                                    {initialPlayStatus && (<View style={commonStyles.thumb}>
                                        <TouchableOpacity onPress={handleImagePress}>
                                            <Image style={{width: '100%', height: VideoHeight,}} source={Lesson1w}/>
                                            <View style={[commonStyles.Shadow, commonStyles.CirclePlayBox]}>
                                                <CirclePlaySvg/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>)}
                                    <Video
                                        ref={video}
                                        style={{
                                            alignSelf: 'center', width: '100%', height: VideoHeight, zIndex: 1,
                                        }}
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
                                    <TouchableOpacity style={[commonStyles.Shadow, commonStyles.ButtonLesson]} onPress={() => navigation.navigate('Test', lesson.id)}>
                                        <Text style={commonStyles.ButtonTextLesson}>Перейти до тесту</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[commonStyles.Shadow, commonStyles.ButtonLesson]}
                                                      onPress={() => navigation.navigate('Abstract', {lessonId: lesson.id, lessonTitle: lesson.title})}>
                                        <Text style={commonStyles.ButtonTextLesson}>Подивитись конспект</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}


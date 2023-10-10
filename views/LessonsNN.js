import React, {useEffect, useState} from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {executeRequest} from "../components/apiRequests";
import {commonStyles} from '../assets/styles';
import {
    LogoSvg,
    InfoSvg,
    ArrowSvg,
    ArrowLeftSvg,
    ArrowRightSvg,
    TreeSvg,
    StarSvg,
    TreeSvgMenu,
    TestsSvg, StarRegularSvg, StarSolidSvg
} from '../assets/imgsvg';
import {ImageBg1, ImageBg2, Lesson1} from '../assets/imgpaths';
import HeaderLessons from "./Headers";
import LessonImage from "./LessonImage";
import LessonStat from "./LessonStat";

export default function LessonsNN({navigation}) {
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

    const getLessonImageUrl = (lessonId) => {
        return `https://opossum.com.ua/constitution/Lesson${lessonId}.png`;
    };


    return (<ImageBackground source={ImageBg2} resizeMode="cover" style={commonStyles.ImageBg}>
        <View style={commonStyles.Container}>
            <View style={commonStyles.HeaderArea}>
                <HeaderLessons Title={'УРОКИ'} IconLeft={TreeSvg} IconRight={LogoSvg}/>
            </View>
            <View style={commonStyles.BodyArea}>
                <View style={commonStyles.ContainerLessons}>
                    <ScrollView style={commonStyles.FL}
                                contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',}}>
                        {lessons.map((lesson) => {
                            return (<TouchableOpacity onPress={() => navigation.navigate('LessonN', lesson)}
                                                      style={[commonStyles.LessonsCardButton]}>
                                <View style={[commonStyles.LessonsCard]}>
                                    <View style={[commonStyles.LessonsCardLeft]}>
                                        <View style={[commonStyles.Image]}>
                                            {/* <Image style={[commonStyles.Image]} source={Lesson1}/>
                                            <Image style={[commonStyles.Image]} source={getLessonImageUrl}/>*/}
                                            <LessonImage lessonId={lesson.id}/>
                                        </View>
                                    </View>
                                    <View style={commonStyles.LessonsCardRight}>
                                        <View style={commonStyles.LessonsCardRightContainer}>
                                            <View style={[commonStyles.LessonsCardRightItem1]}>
                                                <LessonStat/>

                                            </View>
                                            <View style={[commonStyles.LessonsCardRightItem2]}>
                                                <Text style={commonStyles.TitleLessonCard}>{lesson.name}</Text>
                                                <View style={commonStyles.line}/>
                                                <Text style={commonStyles.DscLessonCard}>{lesson.title}</Text>
                                            </View>
                                            <View style={[commonStyles.LessonsCardRightItem3]}>
                                                <View style={[commonStyles.ArrowSvgBox]}>
                                                    <ArrowRightSvg
                                                        SvgStyle={[commonStyles.ColorArrowRight, commonStyles.Shadow]}/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>);
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    </ImageBackground>);
}

const styles = StyleSheet.create({});
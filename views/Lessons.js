import React, {useEffect, useState} from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView,  FlatList, ActivityIndicator} from 'react-native';
import {executeRequest} from "../components/apiRequests";
import {commonStyles} from '../assets/styles';
import {LogoSvg, ArrowRightSvg, TreeSvg} from '../assets/imgsvg';
import {ImageBg1, ImageBg2, Lesson1} from '../assets/imgpaths';
import HeaderLessons from "./Headers";
import LessonImage from "./LessonImage";
import LessonStat from "./LessonStat";
import {useErrorModal} from "../components/ErrorModalProvider";
import {Image} from "react-native-expo-image-cache";

export default function Lessons({navigation}) {
    const [lessons, setLessons] = useState([]);
    const {showErrorModal} = useErrorModal();

    useEffect(() => {
        fetchLessons();
    }, []);

    const fetchLessons = async () => {
        try {
            const data = await executeRequest('/api/lessons', 'GET');
            setLessons(data);
        } catch (error) {
            showErrorModal('Помилка при отриманні уроків:' + error.response.data);
            console.error('Помилка при отриманні уроків:', error);
        }
    };

    const getLessonImageUrl = (lessonId) => {
        return `https://opossum.com.ua/constitution/Lesson${lessonId}.png`;
    };

    if (!lessons) {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={"large"}/>
        </View>);
    }

    return (<ImageBackground source={ImageBg2} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.HeaderArea}>
                    <HeaderLessons Title={'УРОКИ'} IconLeft={TreeSvg} IconRight={LogoSvg}/>
                </View>
                <View style={commonStyles.BodyArea}>
                    <View style={commonStyles.ContainerLessons}>
                        <FlatList
                            style={commonStyles.FL}
                            data={lessons}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={{marginLeft: 10 /*новый стиль*/,flexGrow: 1, justifyContent: 'center'/*, alignItems: 'center'*/, width: '100%'}}
                            onRefresh={() => fetchLessons()}
                            refreshing={!lessons}
                            renderItem={({item}) => (
                                /*<ScrollView style={commonStyles.FL}
                                            contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',}}>
                                    {lessons.map((lesson) => {
                                        return (*/<TouchableOpacity onPress={() => navigation.navigate('Lesson', item)}
                                                        style={[commonStyles.LessonsCardButton]}>
                                    <View style={[commonStyles.LessonsCard]}>
                                        <View style={[commonStyles.LessonsCardLeft]}>
                                            <View style={[commonStyles.Image]}>
                                                {/* <Image style={[commonStyles.Image]} source={Lesson1}/>
                                            <Image style={[commonStyles.Image]} source={getLessonImageUrl}/>*/}
                                                <LessonImage lessonId={item.id}/>
                                            </View>
                                        </View>
                                        <View style={commonStyles.LessonsCardRight}>
                                            <View style={commonStyles.LessonsCardRightContainer}>
                                                <View style={[commonStyles.LessonsCardRightItem1]}>
                                                    <LessonStat correctAnswer={item.testResult.correctAnswers} answered={item.testResult.userAnswers} totalQuestions={item.testResult.questions}/>

                                                </View>
                                                <View style={[commonStyles.LessonsCardRightItem2]}>
                                                    <Text style={commonStyles.TitleLessonCard}>{item.name}</Text>
                                                    <View style={commonStyles.line}/>
                                                    <Text style={commonStyles.DscLessonCard}>{item.title}</Text>
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
                                </TouchableOpacity>
                            )}/>
                        {/*</ScrollView>*/}
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}
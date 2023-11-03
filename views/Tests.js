import React, {useEffect, useState} from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, FlatList} from 'react-native';
import {executeRequest} from "../components/apiRequests";
import {commonStyles} from '../assets/styles';
import {LogoSvg, TestsSvg} from '../assets/imgsvg';
import {ImageBg1, ImageBg2, Lesson1} from '../assets/imgpaths';
import HeaderLessons from "./Headers";
import LessonImage from "./LessonImage";
import LessonStat from "./LessonStat";

export default function LessonsNN({navigation}) {
    const [lessonBlocks, setLessonBlocks] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        fetchLessonBlocks();
    }, []);

    const fetchLessonBlocks = async () => {
        try {
            const data = await executeRequest('/api/lesson_blocks', 'GET');
            setLessonBlocks(data);
        } catch (error) {
            console.error('Помилка при отриманні уроків:', error);
        }
    };


    return (<ImageBackground source={ImageBg2} resizeMode="cover" style={commonStyles.ImageBg}>
        <View style={commonStyles.Container}>
            <View style={commonStyles.HeaderArea}>
                <HeaderLessons Title={'ТЕСТИ'} IconLeft={TestsSvg} IconRight={LogoSvg}/>
            </View>
            <View style={commonStyles.BodyArea}>
                <View style={commonStyles.ContainerLessons}>
                    <FlatList
                        data={lessonBlocks}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('FinalTest', item.id)}>
                                <View style={[commonStyles.LessonsCard]}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.text}</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        //Setting the number of column
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />




                   {/* <ScrollView style={commonStyles.FL}
                                contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',}}>
                        {lessons.map((lesson) => {
                            return (<TouchableOpacity onPress={() => navigation.navigate('LessonN', lesson)}
                                                      style={[commonStyles.LessonsCardButton]}>
                                <View style={[commonStyles.LessonsCard]}>
                                    <View style={[commonStyles.LessonsCardLeft]}>
                                        <View style={[commonStyles.Image]}>
                                             <Image style={[commonStyles.Image]} source={Lesson1}/>
                                            <Image style={[commonStyles.Image]} source={getLessonImageUrl}/>
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
                    </ScrollView>*/}
                </View>
            </View>
        </View>
    </ImageBackground>);
}
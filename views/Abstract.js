import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from "react";
import {executeRequest} from "../components/apiRequests";
import {ImageBackground, StyleSheet, Text, ScrollView, View, useWindowDimensions, ActivityIndicator} from 'react-native';
import HTML from "react-native-render-html";
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import HeaderLessons from "./Headers";
import {AbstractsSvg, LogoSvg} from "../assets/imgsvg";

export default function Abstract({route}) {
    const contentWidth = useWindowDimensions().width;
    const [abstract, setAbstract] = useState(null);
    const {lessonId, lessonTitle} = route.params;
    console.log(route.params);
    useEffect(() => {
        fetchAbstract();
    }, []);

    const fetchAbstract = async () => {
        try {
            const data = await executeRequest('/api/summaries/' + lessonId);
            setAbstract(data);
        } catch (error) {
            console.error('Ошибка при получении даних:', error);
        }
    };

    const htmlContent = abstract?.text;
    const htmlStyle = {
        p: {fontSize: 16, /*textIndent: 20,*/}, div: {fontFamily: 'Roboto', paddingTop: 0, paddingBottom: 20}, ul: {fontSize: 16, marginBottom: 0}, li: {marginBottom: 0},
    };

    if (!abstract) {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={"large"}/>
        </View>);
    }

    return (<ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.HeaderArea}>
                    <HeaderLessons Title={'КОНСПЕКТИ'} IconLeft={AbstractsSvg} IconRight={LogoSvg}/>
                </View>
                <View style={commonStyles.BodyArea}>
                    <View style={commonStyles.ContainerLesson}>
                        <ScrollView style={commonStyles.SV} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',}}>
                            <View style={commonStyles.ContainerHtml}>
                                <Text style={commonStyles.LessonId}>Конспект до Уроку {lessonId}</Text>
                                <View style={commonStyles.LineAbstract}/>
                                <Text style={commonStyles.LessonTitle}>{lessonTitle}</Text>
                                <HTML tagsStyles={htmlStyle} source={{html: htmlContent}} contentWidth={contentWidth}/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

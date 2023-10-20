import React, {useEffect, useState} from "react";
import {ImageBackground,  Text,  View,  ScrollView, ActivityIndicator, useWindowDimensions} from 'react-native';
import {ImageBg2} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {executeRequest} from "../components/apiRequests";
import ItemCarousel from "../components/Abstracts/ItemCarousel";
import HTML from "react-native-render-html";
import HeaderLessons from "./Headers";
import {AbstractsSvg, LogoSvg} from "../assets/imgsvg";

const htmlStyle = {p: {fontSize: 16}, div: {fontFamily: 'Roboto', paddingTop: 0, paddingBottom: 20}, ul: {fontSize: 16}, li: {marginBottom: 10},};
export default function Abstracts() {
    const contentWidth = useWindowDimensions().width;
    const [abstracts, setAbstracts] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const lessonIds = abstracts?.map(abstract => ({id: abstract.lesson.id})) || [];
    useEffect(() => {
        fetchAbstracts();
    }, []);

    const fetchAbstracts = async () => {
        try {
            const data = await executeRequest('/api/summaries/all', 'GET');
            const extendedAbstracts = data.concat(data.slice(0, 4));
            setAbstracts(extendedAbstracts);
        } catch (error) {
            console.error('Помилка при отриманні конспектів:', error);
        }
    };

    if (!abstracts) {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={"large"}/>
        </View>);
    }

    return (<ImageBackground source={ImageBg2} resizeMode="cover" style={commonStyles.ImageBg}>
        <View style={commonStyles.Container}>
            <View style={commonStyles.HeaderArea}>
                <HeaderLessons Title={'КОНСПЕКТИ'} IconLeft={AbstractsSvg} IconRight={LogoSvg}/>
            </View>
            <View style={commonStyles.BodyArea}>
                <View style={commonStyles.ContainerAbstracts}>
                    <ItemCarousel style={commonStyles.ContainerCarousel} items={lessonIds}
                                  handleIndexChange={(index) => setCurrentIndex(index)}/>
                    <ScrollView style={commonStyles.SV} contentContainerStyle={{
                        justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
                        <View style={commonStyles.ContainerHtml}>
                            <Text style={commonStyles.LessonId}>Конспект до Уроку {abstracts[currentIndex]?.lesson.id}</Text>
                            <View style={commonStyles.LineAbstract}/>
                            <Text style={commonStyles.LessonTitle}>{abstracts[currentIndex]?.lesson.title}</Text>
                            <HTML tagsStyles={htmlStyle} source={{html: abstracts[currentIndex]?.text}} contentWidth={contentWidth}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    </ImageBackground>);
}
import React, {useEffect, useState} from "react";
import {Button, FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native';
import {ImageBg2} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {executeRequest} from "../components/apiRequests";
import ItemCarousel from "../components/Abstracts/ItemCarousel";
import HTML from "react-native-render-html";
import HeaderLessons from "./Headers";
import {AbstractsSvg, CatSvg, LogoSvg} from "../assets/imgsvg";

export default function Abstracts({navigation, items}) {

    const goBack = () => navigation.goBack();
    const [abstracts, setAbstracts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const htmlStyle = {p: {fontSize: 16, textIndent: 20,}, div: {fontFamily: 'Roboto', paddingTop: 0, paddingBottom: 20}, ul: {fontSize: 16}, li: {marginBottom: 10},};
    useEffect(() => {
        fetchAbstracts();
    }, []);

    const fetchAbstracts = async () => {
        try {
            const data = await executeRequest('/api/summaries/all', 'GET');
            setAbstracts(data);
        } catch (error) {
            console.error('Помилка при отриманні конспектів:', error);
        }
    };

    return (<ImageBackground source={ImageBg2} resizeMode="cover" style={commonStyles.ImageBg}>
        <View style={commonStyles.Container}>
            <View style={commonStyles.HeaderArea}>
                <HeaderLessons Title={'КОНСПЕКТИ'} IconLeft={AbstractsSvg} IconRight={LogoSvg}/>
            </View>
            <View style={commonStyles.BodyArea}>
                <View style={commonStyles.ContainerAbstracts}>
                    {/*<Text style={commonStyles.TitleTempText}>Перелік Конспектів</Text>*/}
                    <ItemCarousel style={commonStyles.ContainerCarousel} items={abstracts.map(abstract => ({id: abstract.lesson.id}))}
                                  handleIndexChange={(index) => setCurrentIndex(index)}/>
                    <ScrollView style={commonStyles.SV} contentContainerStyle={{
                        justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%',
                        //height: '100%'
                    }}>
                        <View style={commonStyles.ContainerHtml}>
                            <Text style={commonStyles.LessonId}>Конспект до Уроку 1</Text>
                            <View style={commonStyles.LineAbstract}/>
                            <Text style={commonStyles.LessonTitle}>ПРАВО. ЗАКОН. КОНСТИТУЦІЯ.</Text>
                            <HTML tagsStyles={htmlStyle} source={{html: abstracts[currentIndex]?.text}}/>
                        </View>
                    </ScrollView>
                    {/*<FlatList style={{width: 400}} data={abstracts} renderItem={({item}) => (

                            <View>
                                <View>
                                    <Text style={styles._5}>{item.text}</Text>
                                </View>
                            </View>
                        )}
                        />*/}
                </View>
            </View>
            {/*<Menu navigation={navigation}/>*/}
        </View>
    </ImageBackground>);
}


const styles = StyleSheet.create({


    Container: {
        flex: 1,
        paddingTop: 0,
        verticalAlign: 'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },


    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    _5: {

        fontSize: 15,
        fontWeight: "700",
    },

    Text: {

        color: '#00325B', //textAlign:'center',
        fontFamily: 'Roboto', fontSize: 18, marginTop: 20,
    },

    AbstractText: {
        paddingTop: 10,


    },
});

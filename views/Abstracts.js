import React, {useEffect, useState} from "react";
import {
    Button,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {executeRequest} from "../components/apiRequests";
import ItemCarousel from "../components/Abstracts/ItemCarousel";
import HTML from "react-native-render-html";


export default function Abstracts({navigation, items}) {

    const goBack = () => navigation.goBack();
    const [abstracts, setAbstracts] = useState([]);
    const [currentIndex, setCurrentIndex]= useState(0);
    const htmlStyle = {p:{ fontSize:16, textIndent: 20,}, div:{fontFamily:'Roboto', paddingTop:0, paddingBottom:20}, ul:{fontSize:16}, li:{marginBottom:10},};
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

    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>
            <View style={commonStyles.Container}>

                <View style={commonStyles.BodyArea}>

                    <View style={commonStyles.ContainerLesson}>

                        {/*<Text style={commonStyles.TitleTempText}>Перелік Конспектів</Text>*/}
                        <ItemCarousel items={abstracts.map(abstract => ({ id: abstract.lesson.id }))} handleIndexChange={(index)=>setCurrentIndex(index)}/>

                        <ScrollView style={styles.SV} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                                <HTML tagsStyles = {htmlStyle} source={{ html: abstracts[currentIndex]?.text }} />
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
        </ImageBackground>
    )
        ;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    _5: {

        fontSize: 15,
        fontWeight: "700",
    },
    ImageBg1: {
        flex: 1,
        // verticalAlign:'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },
    SV: {
        flex: 1,
        //   paddingTop: 100,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },

    Container: {
        flex: 1,
        paddingTop: 100,
        verticalAlign:'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '90%',
    },


    LessonId: {
        color:'#00325B',
        //  textAlign:'center',
        fontFamily:'MarmeladRegular',
        fontSize: 20,
        marginTop: 20,
    },


    LessonTitle: {
        color:'#00325B',
        //  textAlign:'center',
        fontFamily:'MarmeladRegular',
        fontSize: 22,
        //marginTop: 20,
        marginBottom: 20,
    },

    Text: {

        color:'#00325B',
        //textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 18,
        marginTop: 20,
    },

    AbstractText:{
        paddingTop:10,


    },


});

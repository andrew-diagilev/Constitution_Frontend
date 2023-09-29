import React, {useEffect, useState} from "react";
import {Button, FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {executeRequest} from "../components/apiRequests";


export default function Abstracts({navigation}) {
    const goBack = () => navigation.goBack();
    const [abstracts, setAbstracts] = useState([]);

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
                    <View style={commonStyles.TitleTemp}>
                        <Text style={commonStyles.TitleTempText}>Перелік Конспектів</Text>
                        <FlatList style={{width: 400}} data={abstracts} renderItem={({item}) => (

                            <View>
                                <View>
                                    <Text style={styles._5}>{item.text}</Text>
                                </View>
                            </View>
                        )}
                        />

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
});

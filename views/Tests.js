import React from "react";
import {ImageBackground, Text, View} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";

export default function Tests({navigation}) {
/*    const goBack = () => navigation.goBack();*/
    return (<ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.BodyArea}>
                    <View style={commonStyles.ContainerLesson}>
                        <View style={commonStyles.TitleTemp}>
                            <Text style={commonStyles.TitleTempText}>Перелік Тестів</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>);
}

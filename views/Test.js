import React from "react";
import {View, ImageBackground} from 'react-native';
import {ImageBg3} from '../assets/imgpaths';
import {commonStyles} from "../assets/styles";
import CommonTestComponent from "../components/Test/CommonTestComponent";

export default function Test({navigation, route}) {

    const handleNavigate = () => navigation.navigate('Lessons')
    return (
        <ImageBackground source={ImageBg3} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <CommonTestComponent handleModalClose={handleNavigate} route={route} isFinalTest={false}/>
            </View>
        </ImageBackground>);
};
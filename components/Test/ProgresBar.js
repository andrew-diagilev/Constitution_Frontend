import React from 'react';
import {View, Animated, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {StarSvg} from "../../assets/imgsvg";
import {commonStyles} from "../../assets/styles";

export default function ProgressBar({ progressAnim, totalQuestions, currentQuestionIndex}) {
    return (
        <View style={{width:'100%', flexDirection:'row',alignItems: 'center',
            verticalAlign:"middle", }}>
            <View style={[commonStyles.ProgressTest, commonStyles.ProgressBarTest]}>
                <Animated.View style={[commonStyles.ProgressTest, commonStyles.ProgressAnimTest, { width: progressAnim }]} />

            </View>


                <Text style={commonStyles.CounterTextTest}>{currentQuestionIndex + 1} / {totalQuestions}</Text>


        </View>
    );
}
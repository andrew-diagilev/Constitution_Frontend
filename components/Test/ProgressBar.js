import React from 'react';
import {View, Animated, Text} from 'react-native';
import {commonStyles} from "../../assets/styles";

export default function ProgressBar({progressAnim, totalQuestions, currentQuestionIndex}) {
    return (
        <View style={[commonStyles.CounterTestContainer]}>
            <View style={[commonStyles.ProgressBarContainer]}>
                <View style={[commonStyles.ProgressTest, commonStyles.ProgressBarTest]}>
                    <Animated.View
                        style={[commonStyles.ProgressTest, commonStyles.ProgressAnimTest, {width: progressAnim}]}/>
                </View>
            </View>
            <View style={[commonStyles.CounterContainer]}>
                <Text style={commonStyles.CounterTextTest}>{currentQuestionIndex + 1} / {totalQuestions}</Text>
            </View>
        </View>
    );
}
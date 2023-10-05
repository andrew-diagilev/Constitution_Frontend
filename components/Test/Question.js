import React from 'react';
import { View, Text } from 'react-native';
import {commonStyles} from "../../assets/styles";

export default function Question({ currentQuestionIndex, totalQuestions, questionText }) {
    return (
        <View style={{
            marginVertical: 20,
            width:'100%',
          // textAlign:'center',
            alignItems: 'center'
        }}>
            {/* Question Counter
            <View style={commonStyles.CounterTest}>
                <Text style={commonStyles.CounterTextTest}>{currentQuestionIndex + 1} /</Text>
                <Text style={commonStyles.CounterTextTest}> {totalQuestions}</Text>
            </View>
*/}
            {/* Question */}
            <Text style={commonStyles.QuestionTextTest}>{questionText}</Text>
        </View>

    );
}
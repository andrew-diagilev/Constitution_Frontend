import React from 'react';
import { View, Text } from 'react-native';

export default function Question({ currentQuestionIndex, totalQuestions, questionText }) {
    return (
        <View style={{
            marginVertical: 40
        }}>
            {/* Question Counter */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex + 1}</Text>
                <Text style={{fontSize: 18, opacity: 0.6}}> {totalQuestions}</Text>
            </View>

            {/* Question */}
            <Text style={{
                fontSize: 30
            }}>{questionText}</Text>
        </View>

    );
}
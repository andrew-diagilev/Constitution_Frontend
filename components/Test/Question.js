import React from 'react';
import { View, Text } from 'react-native';

export default function Question({ currentQuestionIndex, totalQuestions, questionText }) {
    return (
        <View style={{
            marginVertical: 40,
            width:'100%',
        }}>
            {/* Question Counter */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{ color:'#00325B',fontFamily:'Roboto', fontSize: 20, opacity: 0.6, marginRight: 0}}>{currentQuestionIndex + 1} /</Text>
                <Text style={{ color:'#00325B', fontFamily:'Roboto', fontSize: 20, opacity: 0.6}}> {totalQuestions}</Text>
            </View>

            {/* Question */}
            <Text style={{
                color:'#00325B',
                //textAlign:'center',
                fontFamily:'Roboto',
                fontSize: 26,
                marginTop: 20,
            }}>{questionText}</Text>
        </View>

    );
}
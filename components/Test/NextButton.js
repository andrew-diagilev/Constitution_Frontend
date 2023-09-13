import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default function NextButton({ handleNextQuestion, isButtonActive, isQuestionAnswered, handleAnswerSubmission }) {
    if (isButtonActive) {
        return (
            <TouchableOpacity
                onPress={handleAnswerSubmission}
                disabled={!isButtonActive}
                style={{
                    marginTop: 20,
                    width: '100%',
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    borderRadius: 5,
                }}
            >
                <Text style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}>Відповісти</Text>
            </TouchableOpacity>
        );
    } else if (isQuestionAnswered) {
        return (
            <TouchableOpacity
                onPress={handleNextQuestion}
                style={{
                    marginTop: 20,
                    width: '100%',
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    borderRadius: 5,
                }}
            >
                <Text style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}>До наступного питання</Text>
            </TouchableOpacity>
        );
    } else return null;
}
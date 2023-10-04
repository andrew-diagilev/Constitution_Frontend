import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {commonStyles} from "../../assets/styles";

export default function NextButton({ handleNextQuestion, isButtonActive, isQuestionAnswered, handleAnswerSubmission }) {
    if (isButtonActive) {
        return (
            <TouchableOpacity
                onPress={handleAnswerSubmission}
                disabled={!isButtonActive}
                style={[commonStyles.Shadow,commonStyles.ButtonNextTest,]}
            >
                <Text style={commonStyles.TextButtonNextTest}>Відповісти</Text>
            </TouchableOpacity>
        );
    } else if (isQuestionAnswered) {
        return (
            <TouchableOpacity
                onPress={handleNextQuestion}
                style={[commonStyles.Shadow,commonStyles.ButtonNextTest,]}
            >
                <Text style={commonStyles.TextButtonNextTest}>До наступного питання</Text>
            </TouchableOpacity>
        );
    } else return null;
}
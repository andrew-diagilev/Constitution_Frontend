import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {commonStyles} from "../../assets/styles";

export default function NextButton({ handleNextQuestion,handleAnswerSubmission, handelScoreModal, isAnswerSelected, isQuestionAnswered, isLastQuestion }) {
    /*return (
        <>
            {isQuestionAnswered ? (
                <TouchableOpacity
                    onPress={handleNextQuestion}
                    style={[commonStyles.Shadow, commonStyles.ButtonNextTest]}
                >
                    <Text style={commonStyles.TextButtonNextTest}>До наступного питання</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    disabled={!isAnswerSelected} // Делаем кнопку "Відповісти" неактивной, если ответ не выбран
                    onPress={handleAnswerSubmission}
                    style={[commonStyles.Shadow, commonStyles.ButtonNextTest]}
                >
                    <Text style={commonStyles.TextButtonNextTest}>Відповісти</Text>
                </TouchableOpacity>
            )}
        </>
    );*/


    return (
        <>
            {isLastQuestion ? (
                <TouchableOpacity
                    onPress={handelScoreModal}
                    style={[commonStyles.Shadow, commonStyles.ButtonNextTest]}
                >
                    <Text style={commonStyles.TextButtonNextTest}>До результатів тесту</Text>
                </TouchableOpacity>
            ) : isQuestionAnswered ? (
                <TouchableOpacity
                    onPress={handleNextQuestion}
                    style={[commonStyles.Shadow, commonStyles.ButtonNextTest]}
                >
                    <Text style={commonStyles.TextButtonNextTest}>До наступного питання</Text>
                </TouchableOpacity>
            ): <TouchableOpacity
                disabled={!isAnswerSelected} // Делаем кнопку "Відповісти" неактивной, если ответ не выбран
                onPress={handleAnswerSubmission}
                style={[commonStyles.Shadow, commonStyles.ButtonNextTest]}
            >
                <Text style={commonStyles.TextButtonNextTest}>Відповісти</Text>
            </TouchableOpacity>}
        </>
    );
}



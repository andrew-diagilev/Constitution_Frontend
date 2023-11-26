import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {commonStyles} from "../../assets/styles";

export default function Answers({answers, handleAnswerSelection, isOptionsDisabled, currentOptionSelected, isQuestionAnswered, highlightCorrect}) {

  /*  const getAnswerButtonHeight = () => {
        const maxTextLength1 = 70; //75 Максимальная длина текста
        const maxTextLength2 = 130; // Максимальная длина текста

        const maxLength = answers.reduce((max, answer) => Math.max(max, answer.text.length), 0);

        console.log("answers.maxLength:", maxLength);

        return maxLength >= maxTextLength1 && maxLength <= maxTextLength2
            ? 70//80
            : maxLength > maxTextLength2
                ? 100
                : 70;
    };*/
    return (
        <View style={styles.shadowContainer}>
            {
                answers.map(answer => (
                    <TouchableOpacity
                        onPress={() => handleAnswerSelection(answer)}
                        disabled={isOptionsDisabled}
                        key={answer.id}
                        style={[
                            commonStyles.AnswerButton,
                            {
                                borderColor:
                                    (answer.correct && answer.answered) ||
                                    (highlightCorrect && answer.correct && isQuestionAnswered)
                                        ? COLORS.BorderSuccess
                                        : !answer.correct && answer.answered
                                            ? COLORS.BorderError
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.BorderSelect}`
                                                : `${COLORS.BorderNormal}`,
                                backgroundColor:
                                    (answer.correct && answer.answered) ||
                                    (highlightCorrect && answer.correct && isQuestionAnswered)
                                        ? `${COLORS.BackgroundSuccess}`
                                        : !answer.correct && answer.answered
                                            ? `${COLORS.BackgroundError}`
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.BackgroundSelect}`
                                                : `${COLORS.BackgroundNormal}`,
                            }/*, {height: getAnswerButtonHeight()}*/]}
                    >
                        <View style={[
                            commonStyles.RoundLg,
                            {
                                backgroundColor:
                                    (answer.correct && answer.answered) ||
                                    (highlightCorrect && answer.correct && isQuestionAnswered)
                                        ? `${COLORS.RoundLgSuccess}`
                                        : !answer.correct && answer.answered
                                            ? `${COLORS.RoundLgError}`
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.RoundLgSelect}`
                                                : `${COLORS.RoundLgNormal}`,
                            },

                        ]}
                        >
                            <View style={[commonStyles.RoundSm,
                                {
                                    backgroundColor:
                                        (answer.correct && answer.answered) ||
                                        (highlightCorrect && answer.correct && isQuestionAnswered)
                                            ? `${COLORS.RoundSmSuccess}`
                                            : !answer.correct && answer.answered
                                                ? `${COLORS.RoundSmError}`
                                                : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                    ? `${COLORS.RoundSmSelect}`
                                                    : `${COLORS.RoundSmNormal}`,
                                },


                            ]}
                            >
                            </View>
                        </View>
                        <Text style={[commonStyles.AnswerText,
                            {
                                color:
                                    (answer.correct && answer.answered) ||
                                    (highlightCorrect && answer.correct && isQuestionAnswered)
                                        ? `${COLORS.TextSuccess}`
                                        : !answer.correct && answer.answered
                                            ? `${COLORS.TextError}`
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.TextSelect}`
                                                : `${COLORS.TextNormal}`,
                            }]}>{answer.text}</Text>

                        {/* Show Check Or Cross Icon based on correct answer
                        {
                            (answer.correct && answer.answered) || (answer.correct && isQuestionAnswered) ? (
                                <View style={{
                                    width: 30, height: 30, borderRadius: 30 / 2,
                                    backgroundColor: COLORS.success,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <MaterialCommunityIcons name="check" style={{
                                        color: COLORS.white,
                                        fontSize: 20
                                    }}/>
                                </View>
                            ) : !answer.correct && answer.answered ? (
                                <View style={{
                                    width: 30, height: 30, borderRadius: 30 / 2,
                                    backgroundColor: COLORS.error,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <MaterialCommunityIcons name="close" style={{
                                        color: COLORS.white,
                                        fontSize: 20
                                    }}/>
                                </View>
                            ) : null
                        }*/}

                    </TouchableOpacity>
                ))
            }
        </View>
    )
};
const styles = StyleSheet.create({
    shadowContainer: {
        alignItems: 'center',
        // Добавьте тень к родительскому контейнеру
        ...commonStyles.Shadow,

    },
});
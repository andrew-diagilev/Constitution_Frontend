import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {commonStyles} from "../../assets/styles";

export default function Answers({ answers, handleAnswerSelection, isOptionsDisabled, currentOptionSelected, isQuestionAnswered }) {
    return (
        <View>
            {
                answers.map(answer => (
                    <TouchableOpacity
                        onPress={() => handleAnswerSelection(answer)}
                        disabled={isOptionsDisabled}
                        key={answer.id}
                        style={[
                            styles.AnswerButton, commonStyles.Shadow,
                            {
                                borderColor:
                                    (answer.correct && answer.answered) ||
                                    (answer.correct && isQuestionAnswered)
                                        ? COLORS.BorderSuccess
                                        : !answer.correct && answer.answered
                                            ? COLORS.BorderError
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.BorderSelect}`
                                                : `${COLORS.BorderNormal}`,
                                backgroundColor:
                                    (answer.correct && answer.answered) ||
                                    (answer.correct && isQuestionAnswered)
                                        ? `${COLORS.BackgroundSuccess}`
                                        : !answer.correct && answer.answered
                                            ? `${COLORS.BackgroundError}`
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.BackgroundSelect}`
                                                : `${COLORS.BackgroundNormal}`,
                            },
                        ]}
                    >
                        <View style={[
                            styles.RoundLg,
                            {
                                backgroundColor:
                                    (answer.correct && answer.answered) ||
                                    (answer.correct && isQuestionAnswered)
                                        ? `${COLORS.RoundLgSuccess}`
                                        : !answer.correct && answer.answered
                                            ? `${COLORS.RoundLgError}`
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.RoundLgSelect}`
                                                : `${COLORS.RoundLgNormal}`,
                            },

                        ]}
                        >
                            <View style={[styles.RoundSm,
                                {
                                    backgroundColor:
                                        (answer.correct && answer.answered) ||
                                        (answer.correct && isQuestionAnswered)
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
                        <Text style={[styles.AnswerText,
                            {
                                color:
                                    (answer.correct && answer.answered) ||
                                    (answer.correct && isQuestionAnswered)
                                        ? `${COLORS.TextSuccess}`
                                        : !answer.correct && answer.answered
                                            ? `${COLORS.TextError}`
                                            : !isQuestionAnswered && answer.id === currentOptionSelected.id
                                                ? `${COLORS.TextSelect}`
                                                : `${COLORS.TextNormal}`,
                            },



                        ]}>{answer.text}</Text>

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

    AnswerButton:{
        borderWidth: 2,
        width: '100%',
        height: 70,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginVertical: 10


    },




    AnswerText:{
    fontSize: 16,
    textAlign:'left',
        paddingLeft:10,
  //  color: COLORS.black,
    alignItems: 'left',


},

    RoundLg: {
        height:30,
        width: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
       alignItems: 'center',
        //verticalAlign:"middle",
       justifyContent: 'center', // Выравнивание по центру по горизонтали
        marginLeft: -10,
        // marginRight: 10,
        padding:4,

    },

    RoundSm: {
        height:18,
        width: 18,
        backgroundColor: '#c3c3c3',
        borderRadius: '50%',
        // alignItems: 'center',
        // verticalAlign:"middle",
        // justifyContent: 'center', // Выравнивание по центру по горизонтали
       // marginLeft: -10,
        // marginRight: 10,
        padding:4,

    },



});
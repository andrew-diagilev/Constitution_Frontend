import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Answers({ answers, handleAnswerSelection, isOptionsDisabled, currentOptionSelected, isQuestionAnswered }) {
    return (
        <View>
            {
                answers.map(answer => (
                    <TouchableOpacity
                        onPress={() => handleAnswerSelection(answer)}
                        disabled={isOptionsDisabled}
                        key={answer.id}
                        style={{
                            borderWidth: 3,
                            borderColor: (answer.correct && answer.answered) || (answer.correct && isQuestionAnswered)
                                ? COLORS.success :
                                !answer.correct && answer.answered
                                    ? COLORS.error : !isQuestionAnswered && answer.id==currentOptionSelected.id
                                        ? COLORS.secondary + '60': COLORS.secondary + '40',
                            backgroundColor: answer.correct && answer.answered
                                ? COLORS.success + '20' :
                                !answer.correct && answer.answered
                                    ? COLORS.error + '20': !isQuestionAnswered && answer.id==currentOptionSelected.id
                                        ? COLORS.secondary + '80' : COLORS.secondary + '20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                    >
                        <Text style={{fontSize: 20, color: COLORS.white}}>{answer.text}</Text>

                        {/* Show Check Or Cross Icon based on correct answer*/}
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
                        }

                    </TouchableOpacity>
                ))
            }
        </View>
    )
};
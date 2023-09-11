import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Test({route}) {
    const lessonId = route.params;
    const [testData, setTestData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(0);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);

    const fetchTestData = async () => {
        try {
            const response = await fetch('http://217.20.181.185:8080/api/tests/' + lessonId);
            const data = await response.json();
            setTestData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!testData) {
            fetchTestData();
        }
    }, [testData]);

    if (!testData) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const handleAnswerSelection = (selectedAnswerId) => {
        setCurrentOptionSelected(selectedAnswerId);
        setIsButtonActive(true);
    };

    const handleAnswerSubmission = async ()=>{
        try {
            const response = await fetch('http://217.20.181.185:8080/api/tests/submit-answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: '1',
                    lessonId: lessonId,
                    questionId: testData.questions[currentQuestionIndex].id,
                    answerId: currentOptionSelected,
                }),
            });
            setCurrentOptionSelected(0);
            setIsButtonActive(false);
        } catch (error) {
            console.error(error);
        }

    }

    const renderQuestion = () => {
        console.log(testData);
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{ fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{ fontSize: 18, opacity: 0.6}}> {testData?.questions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    fontSize: 30
                }}>{testData?.questions[currentQuestionIndex].text}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                   testData?.questions[currentQuestionIndex].answers.map(answer => (
                        <TouchableOpacity
                            onPress={()=>handleAnswerSelection(answer.id)}
                            disabled={isOptionsDisabled}
                            key={answer.id}
                            style={{
                                borderWidth: 3,
                          /*      borderColor: answer==correctOption
                                    ? COLORS.success
                                    : answer==currentOptionSelected,
                                        ? COLORS.error
                                        : COLORS.secondary+'40',*!/
                                backgroundColor: answer==correctOption
                                    ? COLORS.success +'20'*!/
                                    : answer==currentOptionSelected
                                        ? COLORS.error +'20'
                                        : COLORS.secondary+'20',*/
                                height: 60, borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={{fontSize: 20, /*{color: COLORS.white}*/}}>{answer.text}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                answer.correct ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        /*backgroundColor: COLORS.success,*/
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                          /*  color: COLORS.white,*/
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): answer.id == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        /*backgroundColor: COLORS.error,*/
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                           /* color: COLORS.white,*/
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }


    return (
        <View>
        {/* Question */}
    {renderQuestion()}

    {/* Options */}
    {renderOptions()}

            <TouchableOpacity
                onPress={handleAnswerSubmission}
                disabled={!isButtonActive}
                style={{
                    // Стили для кнопки
                }}
            >
                <Text>Отправить ответ</Text>
            </TouchableOpacity>

        </View>

);
};

const styles = {
    questionContainer: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },
};
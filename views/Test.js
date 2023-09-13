import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Animated, Modal,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {COLORS, SIZES} from '../constants';
import Question from "../components/Test/Question";

export default function Test({navigation, route}) {
    const lessonId = route.params;
    const [testData, setTestData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(0);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [isTestPassed, setIsTestPassed] = useState(false);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [score, setScore] = useState(0)

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
        } else {
            setIsTestPassed(testData.questions
                .map(question => question.answers.find(answer => answer.answered === true))
                .filter(answer => answer !== undefined)
                .length == testData.questions.length);
            setScore(testData.questions
                .flatMap((question) => question.answers)
                .filter((answer) => answer.correct && answer.answered).length);
            const answered = testData.questions[currentQuestionIndex].answers.some(answer => answer.answered === true);
            setIsQuestionAnswered(answered);

        }
    }, [currentQuestionIndex, testData]);


    if (!testData) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const handleAnswerSelection = (selectedAnswer) => {
        if (!isQuestionAnswered) {
            setCurrentOptionSelected(selectedAnswer);
            /*  if (currentOptionSelected.correct) {
                  /!*setScore(score + 1);*!/
              }*/
            setIsButtonActive(true);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex == testData.questions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(0);
            setIsButtonActive(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const handleAnswerSubmission = async () => {
        try {
            const response = await fetch('http://217.20.181.185:8080/api/tests/submit-answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: '1',
                    lessonId: lessonId,
                    testId: testData.id,
                    questionId: testData.questions[currentQuestionIndex].id,
                    answerId: currentOptionSelected.id,
                }),
            });
            const data = await response.json();
            setTestData(data);
            setCurrentOptionSelected(0);
            setIsButtonActive(false);
            /*handleNextQuestion();*/
        } catch (error) {
            console.error(error);
        }

    }

    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                }, {
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
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
                    <Text style={{fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex + 1}</Text>
                    <Text style={{fontSize: 18, opacity: 0.6}}> {testData?.questions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    fontSize: 30
                }}>{testData?.questions[currentQuestionIndex].text}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        console.log(isQuestionAnswered);
        return (
            <View>
                {
                    testData?.questions[currentQuestionIndex].answers.map(answer => (
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
    }

    const renderNextButton = () => {
        if (isButtonActive) {
            return (
                <TouchableOpacity
                    onPress={handleAnswerSubmission}
                    disabled={!isButtonActive}
                    style={{
                        marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                    }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Відповісти</Text>
                </TouchableOpacity>
            )
        } else if (isQuestionAnswered) {
            return (<TouchableOpacity
                onPress={handleNextQuestion}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                }}>
                <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>До наступного питання</Text>
            </TouchableOpacity>)
        } else return null
    }


    const progressAnim = progress.interpolate({
        inputRange: [0, testData.questions.length],
        outputRange: ['0%', '100%']
    })

    return (
        <View style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: COLORS.background,
            position: 'relative'
        }}>{!isTestPassed ?(<View>
            {/* ProgressBar */}
            {renderProgressBar()}
            {/* Question */}
            {/*{renderQuestion()}*/}
                <Question currentQuestionIndex={currentQuestionIndex}
                          totalQuestions={testData?.questions.length}
                          questionText={testData?.questions[currentQuestionIndex].text}
                />
            {/* Options */}
            {/*{renderOptions()}*/}
                <Answers
                    options={testData?.questions[currentQuestionIndex].answers}
                    handleAnswerSelection={handleAnswerSelection}
                    isOptionsDisabled={isOptionsDisabled}
                    currentOptionSelected={currentOptionSelected}
                    isQuestionAnswered={isQuestionAnswered}
                />
            {/* Next Button */}
            {renderNextButton()}</View>)
            :
            (<Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}>{score > (testData.questions.length / 2) ? 'Ви пройшли тест з результатом:' : 'Ваш результат міг би бути кращим!'}</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20
                        }}>
                            <Text style={{
                                fontSize: 30,
                                color: score > (testData.questions.length / 2) ? COLORS.success : COLORS.error
                            }}>{score}</Text>
                            <Text style={{
                                fontSize: 20, color: COLORS.black
                            }}>/ {testData.questions.length}</Text>
                        </View>
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Lessons')}
                            style={{
                                backgroundColor: COLORS.accent,
                                padding: 20, width: '100%', borderRadius: 20
                            }}>
                            <Text style={{
                                textAlign: 'center', color: COLORS.white, fontSize: 20
                            }}>ОК</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>)}


        </View>

    );
}
;

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
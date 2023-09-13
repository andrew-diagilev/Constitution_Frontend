import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Animated, Modal,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {COLORS, SIZES} from '../constants';
import Question from "../components/Test/Question";
import Answers from "../components/Test/Answers";
import ScoreModal from "../components/Test/ScoreModal";
import ProgressBar from "../components/Test/ProgresBar";
import NextButton from "../components/Test/NextButton";

export default function Test({navigation, route}) {
    const lessonId = route.params;
    const [testData, setTestData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(0);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [isTestPassed, setIsTestPassed] = useState(false);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [score, setScore] = useState(0);
    const [totalQuestionLength, setTotalQuestionLength] = useState(0);

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
           setTotalQuestionLength(testData.questions.length);
        }
    }, [currentQuestionIndex, testData]);


    if (!testData) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const handleNavigate = () => navigation.navigate('Lessons')
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
        }}>{!isTestPassed /*|| currentQuestionIndex+1 === totalQuestionLength*/? (<View>
                {/* ProgressBar */}
                <ProgressBar progressAnim={progressAnim}/>
                {/* Question */}
                <Question currentQuestionIndex={currentQuestionIndex}
                          totalQuestions={totalQuestionLength}
                          questionText={testData?.questions[currentQuestionIndex].text}
                />
                {/* Answers */}
                <Answers
                    answers={testData?.questions[currentQuestionIndex].answers}
                    handleAnswerSelection={handleAnswerSelection}
                    isOptionsDisabled={isOptionsDisabled}
                    currentOptionSelected={currentOptionSelected}
                    isQuestionAnswered={isQuestionAnswered}
                />
                {/* Next Button */}
                <NextButton
                    handleNextQuestion={handleNextQuestion}
                    handleAnswerSubmission={handleAnswerSubmission}
                    isButtonActive={isButtonActive}
                    isQuestionAnswered={isQuestionAnswered}
                /></View>)
            : <ScoreModal
                isTestPassed={isTestPassed}
                score={score}
                totalQuestions={totalQuestionLength}
                handleNavigate={handleNavigate}/>
        }
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
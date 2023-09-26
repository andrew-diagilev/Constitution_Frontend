import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, Animated, ActivityIndicator} from 'react-native';
import {COLORS, SIZES} from '../constants';
import Question from "../components/Test/Question";
import Answers from "../components/Test/Answers";
import ScoreModal from "../components/Test/ScoreModal";
import ProgressBar from "../components/Test/ProgresBar";
import NextButton from "../components/Test/NextButton";
import {executeRequest} from "../components/apiRequests";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Test({navigation, route}) {
    const lessonId = route.params;
    const [userId, setUserId] = useState(null);
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


    const fetchTestData = async (lessonId, userId) => {
        try {
            console.log(`/api/tests/?lessonId=${lessonId}&userId=${userId}`);
            const data = await executeRequest(`/api/tests/?lessonId=${lessonId}&userId=${userId}`, 'GET');
            setTestData(data);
        } catch (error) {
            console.error('Помилка при отриманні тестів:', error);
        }
    };

    const fetchUserData = async () => {
        try {
            // Получаем userId из AsyncStorage
            const storedUserId = await AsyncStorage.getItem('userId');
            setUserId(storedUserId);
        } catch (error) {
            console.error('Ошибка при получении userId из AsyncStorage:', error);
        }
    };
  /* useEffect(() => {
       if(!userId){
        fetchUserData();}
    }, []);*/

    useEffect(() => {
        if(!userId){
            fetchUserData();}
        else if (!testData ) {
            fetchTestData(lessonId, userId);
        } else  {
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
    }, [currentQuestionIndex, testData, userId]);


    if (!testData) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={"large"}/>
            </View>
        );
    }


    const handleNavigate = () => navigation.navigate('LessonsN')
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
            const data = await executeRequest('/api/tests/submit-answer', 'POST', {}, {
                userId: userId, // Используйте userId, полученный из AsyncStorage
                lessonId: lessonId,
                testId: testData.id,
                questionId: testData.questions[currentQuestionIndex].id,
                answerId: currentOptionSelected.id
            });
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
    const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={styles.ImageBg1}>

            <View style={styles.Container}>
                <Text style={styles.Title}>Тест до Уроку 0</Text>

            <View style={{
                flex: 1,
                paddingVertical: 20,
                paddingHorizontal: 16,
                //   backgroundColor: COLORS.background,
                position: 'relative'
            }}>{!isTestPassed /*|| currentQuestionIndex+1 === totalQuestionLength*/ ? (<View>
                    {/* ProgressBar */}
                    <ProgressBar progressAnim={progressAnim}/>
                    {/* Question */}
                    <Question style={{fontSize: 50, padding: 100,}}
                              currentQuestionIndex={currentQuestionIndex}
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
                </View>
        </ImageBackground>

    );
}
;

const styles = {

    ImageBg1: {
        flex: 1,
        verticalAlign: 'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },

    Container: {
        flex: 1,
        paddingTop: 100,
        verticalAlign: 'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '80%',
    },


    Title: {
        color: '#00325B',
        //  textAlign:'center',
        fontFamily: 'PhilosopherBold',
        fontSize: 22,
        marginTop: 100,
    },

    questionContainer: {
        padding: 100,
        // backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    question: {
        color: '#00325B',
        //textAlign:'center',
        fontFamily: 'Roboto',
        fontSize: 18,
        marginTop: 20,
    },
};
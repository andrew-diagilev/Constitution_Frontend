import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, Animated, ActivityIndicator, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants';
import Question from "../components/Test/Question";
import Answers from "../components/Test/Answers";
import ScoreModal from "../components/Test/ScoreModal";
import ProgressBar from "../components/Test/ProgresBar";
import NextButton from "../components/Test/NextButton";
import {executeRequest} from "../components/apiRequests";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBg1, ImageBg2, ImageBg3, Lesson1 } from '../assets/imgpaths';
import {commonStyles} from "../assets/styles";
import {ArrowLeftSvg, LogoSvg} from "../assets/imgsvg";

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


    const handleNavigate = () => navigation.navigate('LessonsNN')
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
        <ImageBackground source={ImageBg3} resizeMode="cover" style={commonStyles.ImageBg1}>

            <View style={commonStyles.ContainerTest}>
                <View style={commonStyles.HeaderTest}>
                    <View style={commonStyles.HeaderLeftTest}>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('NAV')}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <ArrowLeftSvg/>
                                </View>
                            </View>

                        </TouchableOpacity>

                    </View>
                    <View style={commonStyles.HeaderCenterTest}>

                        <Text style={commonStyles.TitleTest}>Тест до Уроку {lessonId}</Text>
                    </View>
                    <View style={commonStyles.HeaderRightTest}>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('NAV')}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <LogoSvg/>
                                </View>
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>

                <View style={commonStyles.BodyTest}>

                    <View style={{
                        flexDirection: 'row',
                        width:'100%',
                        //paddingVertical: 20,
                       // paddingHorizontal: 20,
                        //   backgroundColor: COLORS.background,
                       // position: 'relative',
                        justifyContent:'center',
                        alignItems: 'center',
                    }}>


                    {!isTestPassed /*|| currentQuestionIndex+1 === totalQuestionLength*/ ? (<View>
                            {/* ProgressBar */}
                            <ProgressBar progressAnim={progressAnim} totalQuestions={totalQuestionLength} currentQuestionIndex={currentQuestionIndex}/>
                            {/* Question */}
                            <Question
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
                                isTestPassed={isTestPassed}
                            /></View>)
                        : <ScoreModal
                            isTestPassed={isTestPassed}
                            score={score}
                            totalQuestions={totalQuestionLength}
                            handleNavigate={handleNavigate}/>
                    }
                    </View>
                </View>





            </View>
        </ImageBackground>

    );
}
;

const styles = {








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
        color: '#000000',
        //textAlign:'center',
        fontFamily: 'Roboto',
        fontSize: 18,
        marginTop: 20,
    },
};
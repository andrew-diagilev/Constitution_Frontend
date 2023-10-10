import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, Animated, ActivityIndicator} from 'react-native';
import Question from "../components/Test/Question";
import Answers from "../components/Test/Answers";
import ScoreModal from "../components/Test/ScoreModal";
import ScoreModalCat from "../components/Test/ScoreModalCat";
import ProgressBar from "../components/Test/ProgressBar";
import NextButton from "../components/Test/NextButton";
import {executeRequest} from "../components/apiRequests";
import {ImageBg3} from '../assets/imgpaths';
import {commonStyles} from "../assets/styles";
import {AbstractsSvg, LogoSvg, TestsSvg} from "../assets/imgsvg";
import {selectUserId} from "../redux/authSelectors";
import {useSelector} from "react-redux";
import HeaderLessons from "./Headers";

export default function Test({navigation, route}) {
    const userId = useSelector(selectUserId);
    const lessonId = route.params;
    const [testData, setTestData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(0);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [isTestPassed, setIsTestPassed] = useState(false);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [score, setScore] = useState(0);
    const [totalQuestionLength, setTotalQuestionLength] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);

    const fetchTestData = async (lessonId, userId) => {
        try {
            console.log(`/api/tests/?lessonId=${lessonId}&userId=${userId}`);
            const data = await executeRequest(`/api/tests/?lessonId=${lessonId}&userId=${userId}`, 'GET');
            setTestData(data);
        } catch (error) {
            console.error('Помилка при отриманні тестів:', error);
        }
    };

    useEffect(() => {
        if (!testData) {
            fetchTestData(lessonId, userId);
        } else {
            const answeredCount = testData.questions.map(question => question.answers.find(answer => answer.answered === true)).filter(answer => answer !== undefined).length;
            const correctAnsweredCount = testData.questions.flatMap((question) => question.answers).filter((answer) => answer.correct && answer.answered).length;
            const answered = testData.questions[currentQuestionIndex].answers.some(answer => answer.answered === true);
            setIsTestPassed(answeredCount === testData.questions.length);
            setScore(correctAnsweredCount);
            setIsQuestionAnswered(answered);
            setTotalQuestionLength(testData.questions.length);
        }
    }, [currentQuestionIndex, testData, userId]);

    if (!testData) {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={"large"}/>
        </View>);
    }

    const handleNavigate = () => navigation.navigate('LessonsNN')

    const handleAnswerSelection = (selectedAnswer) => {
        if (!isQuestionAnswered) {
            setCurrentOptionSelected(selectedAnswer);
            setIsAnswerSelected(true);
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentOptionSelected(0);
        setIsAnswerSelected(false);
    }

    const handleAnswerSubmission = async () => {
        try {
            const data = await executeRequest('/api/tests/submit-answer', 'POST', {}, {
                userId: userId, // Используйте userId, полученный из AsyncStorage
                lessonId: lessonId, testId: testData.id, questionId: testData.questions[currentQuestionIndex].id, answerId: currentOptionSelected.id
            });
            setTestData(data);
            setCurrentOptionSelected(0);
            setIsAnswerSelected(false);
            if (currentQuestionIndex === testData.questions.length - 1) {
                // Если текущий вопрос - последний, показать модальное окно или перейти к результатам
                setIsLastQuestion(true);
            }
            Animated.timing(progress, {toValue: currentQuestionIndex + 1, duration: 1000, useNativeDriver: false}).start();
        } catch (error) {
            console.error(error);
        }
    }

    const handleScoreModal = () => {
        setShowScoreModal(true);
    };

    const progressAnim = progress.interpolate({
        inputRange: [0, testData.questions.length], outputRange: ['0%', '100%']
    })

    return (

        <ImageBackground source={ImageBg3} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.HeaderArea}>
                    <HeaderLessons Title={'ТЕСТ'} IconLeft={TestsSvg} IconRight={LogoSvg}/>
                </View>
                <View style={commonStyles.BodyArea}>

                    <View style={commonStyles.ContainerTest}>
                        <View style={commonStyles.HeaderTest}>
                            <Text style={commonStyles.TitleTest}>Тест до Уроку {lessonId}</Text>
                        </View>
                        <View style={commonStyles.BodyTest}>

                                {(isTestPassed && currentQuestionIndex === 0) || showScoreModal ? <ScoreModalCat
                                    isTestPassed={isTestPassed}
                                    score={score}
                                    totalQuestions={totalQuestionLength}
                                    handleNavigate={handleNavigate}/> : (<View>
                                    {/* ProgressBar */}

                                    <ProgressBar progressAnim={progressAnim} totalQuestions={totalQuestionLength}
                                                 currentQuestionIndex={currentQuestionIndex}/>
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
                                    <View style={{
                                       // marginVertical: 20,
                                        width:'100%',
                                      //  textAlign:'center',
                                        alignItems: 'center'
                                    }}>
                                    <NextButton
                                        handleNextQuestion={handleNextQuestion}
                                        handleAnswerSubmission={handleAnswerSubmission}
                                        handelScoreModal={handleScoreModal}
                                        isAnswerSelected={isAnswerSelected}
                                        isQuestionAnswered={isQuestionAnswered}
                                        isTestPassed={isTestPassed}
                                        isLastQuestion={isLastQuestion}
                                    />
                                </View>
                                </View>)}

                        </View>
                    </View>


                </View>
            </View>


        </ImageBackground>);
};
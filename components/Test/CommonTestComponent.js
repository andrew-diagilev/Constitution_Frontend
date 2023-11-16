// CommonTestComponent.js
import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Animated, ActivityIndicator} from 'react-native';
import Question from "./Question";
import Answers from "./Answers";
import ProgressBar from "./ProgressBar";
import NextButton from "./NextButton";
import {ImageBg3} from '../../assets/imgpaths';
import {commonStyles} from "../../assets/styles";
import {LogoSvg, TestsSvg} from "../../assets/imgsvg";
import HeaderLessons from "../../views/Headers";
import {fetchTestData, submitAnswer, deleteTestResult} from '../../utils/testUtil';
import ScoreModalCat from "./ScoreModalCat";

const CommonTestComponent = ({handleModalClose, route, isFinalTest}) => {
    const lessonId = isFinalTest ? null : route.params.lessonId;
    const lessonBlockId = isFinalTest ? route.params.lessonBlockId : null;
    const testId = route.params.testId;

    // Общая логика и состояния, используемые и в Test, и в FinalTest
    const [testData, setTestData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
    const [initialized, setInitialized] = useState(false);

    const findNextUnansweredQuestionIndex = () => {
        for (let i = 0; i < testData?.questions.length; i++) {
            const question = testData.questions[i];
            const isAnswered = question.answers.some(answer => answer.answered);
            if (!isAnswered) {
                return i;
            }
        }
        return 0;
    };

    const calculateInitialProgress = (questions) => {
        let answeredCount = 0;

        // Пройти по массиву вопросов и подсчитать количество ответов, которые пользователь уже дал
        questions.forEach(question => {
            const answered = question.answers.some(answer => answer.answered === true);
            if (answered) {
                answeredCount++;
            }
        });

        // Вернуть процент ответов, которые пользователь уже дал
        return answeredCount;
    };

    const getTestData = async (testId) => {
        try {
            const data = await fetchTestData(testId);
            setTestData(data);
        } catch (error) {
            console.error('Ошибка при получении данных теста:', error);
        }
    };

    const deleteTestData = async () => {
        try {
            await deleteTestResult(testId);
            setTestData(null);
            setCurrentQuestionIndex(0);
            setScore(0);
            setIsTestPassed(false);
            setIsQuestionAnswered(false);
            setIsOptionsDisabled(false);
            setIsAnswerSelected(false);
            setShowScoreModal(false);
            setProgress(new Animated.Value(0));
            setIsLastQuestion(false);
        } catch (error) {
            console.error('Ошибка при удалении данных теста:', error);
        }
    };

    const handleAnswerSubmission = async () => {
        try {
            const data = await submitAnswer(testData.id, testData.questions[currentQuestionIndex].id, currentOptionSelected.id);
            setTestData(data);
            setCurrentOptionSelected(0);
            setIsAnswerSelected(false);
            if (currentQuestionIndex === testData.questions.length - 1) {
                // Если текущий вопрос - последний, показать модальное окно или перейти к результатам
                setIsLastQuestion(true);
            }
        } catch (error) {
            console.error('Ошибка при подтверждении ответа:', error);
        }
    };

    useEffect(() => {
        if (!testData) {
            getTestData(testId);
        } else {
            const answeredCount = testData.questions.map(question => question.answers.find(answer => answer.answered === true)).filter(answer => answer !== undefined).length;
            const correctAnsweredCount = testData.questions.flatMap((question) => question.answers).filter((answer) => answer.correct && answer.answered).length;
            const answered = testData.questions[currentQuestionIndex].answers.some(answer => answer.answered === true);
            setIsTestPassed(answeredCount === testData.questions.length);
            setScore(correctAnsweredCount);
            setIsQuestionAnswered(answered);
            setTotalQuestionLength(testData.questions.length);

            // Инициализировать setProgress
            const initialProgress = calculateInitialProgress(testData.questions);
            requestAnimationFrame(() => {
                Animated.timing(progress, {
                    toValue: initialProgress,
                    duration: 1000,
                    useNativeDriver: false
                }).start();
            });

            if (!initialized) {
                const initialQuestionIndex = findNextUnansweredQuestionIndex();
                setCurrentQuestionIndex(initialQuestionIndex);
                setInitialized(true);
            }
        }
    }, [currentQuestionIndex, testData, initialized]);

    if (!testData) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={"large"}/>
            </View>
        );
    }

    const handleNavigate = () => navigation.navigate('Lessons');

    const handleAnswerSelection = (selectedAnswer) => {
        if (!isQuestionAnswered) {
            setCurrentOptionSelected(selectedAnswer);
            setIsAnswerSelected(true);
        }
    };

    const handleNextQuestion = () => {
        const nextUnansweredIndex = findNextUnansweredQuestionIndex();
        setCurrentQuestionIndex(nextUnansweredIndex);
        setCurrentOptionSelected(0);
        setIsAnswerSelected(false);
    };

    const handleScoreModal = () => {
        setShowScoreModal(true);
    };

    const progressAnim = progress.interpolate({
        inputRange: [0, testData.questions.length],
        outputRange: ['0%', '100%']
    });

    return (
        <>
            {(isTestPassed && currentQuestionIndex === 0) || showScoreModal ? (
                <ScoreModalCat
                    isTestPassed={isTestPassed}
                    score={score}
                    totalQuestions={totalQuestionLength}
                    handleNavigate={handleModalClose}
                    handleTestDataDelete={() => deleteTestData()}
                />
            ) : null}
            <View style={commonStyles.HeaderArea}>
                <HeaderLessons Title={'ТЕСТ'} IconLeft={TestsSvg} IconRight={LogoSvg}/>
            </View>
            <View style={commonStyles.BodyArea}>
                <View style={commonStyles.ContainerTest}>
                    <View style={commonStyles.HeaderTest}>
                        <Text style={commonStyles.TitleTest}>
                            {isFinalTest ? `Тест до Блоку уроків ${lessonBlockId}` : `Тест до Уроку ${lessonId}`}
                        </Text>
                    </View>
                    <View style={commonStyles.BodyTest}>
                        <View>
                            {/* ProgressBar */}
                            <ProgressBar
                                progressAnim={progressAnim}
                                totalQuestions={totalQuestionLength}
                                currentQuestionIndex={currentQuestionIndex}
                            />
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
                                highlightCorrect={!isFinalTest}  // Подсветка правильных ответов только в окончательном тесте
                            />
                            {/* Next Button */}
                            <View style={{
                                width: '100%',
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
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default CommonTestComponent;

import React from "react";
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {ImageBg1} from "../assets/imgpaths";
import {commonStyles} from "../assets/styles";
import {useDispatch} from 'react-redux';
import {logout} from "../redux/authActions";
import HeaderLessons from "./Headers";
import {LogoSvg, CatSvg} from "../assets/imgsvg";
import CircularProgress from "./ProgressCircle";


export default function Profile({navigation}) {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    const LessonTotal = 25;
    const TestTotal = 25;
    const TestQuestion = 4;
    const BlockTotal = 5;
    const BlockQuestion = 10;

// Генерирует случайное целое число в диапазоне [0, LessonTotal]
    const LessonPass = Math.floor(Math.random() * (LessonTotal + 1));

// Генерирует случайное целое число в диапазоне [LessonTotal - 1, LessonTotal]
    const TestPass = Math.floor(Math.random() * (LessonPass - (LessonPass - 1) + 1)) + (LessonPass - 1);
    if (TestPass < 0) {
        const TestPass = 0;
    }

    const TestQuestionTotal = TestTotal * TestQuestion;
    const TestQuestionPass = TestPass * TestQuestion;

// Генерирует случайное целое число в диапазоне [0, TestQuestionPass]
    const TestQuestionСorrect = Math.floor(Math.random() * (TestQuestionPass + 1));

// Генерирует случайное целое число в диапазоне [0, TestPass / BlockTotal]
    const BlockPass = Math.floor(Math.random() * (TestPass / BlockTotal + 1));

    const BlockQuestionTotal = BlockTotal * BlockQuestion;
    const BlockQuestionPass = BlockPass * BlockQuestion;

// Генерирует случайное целое число в диапазоне [0, BlockQuestionPass]
    const BlockQuestionСorrect = Math.floor(Math.random() * (BlockQuestionPass + 1));

// Ваши случайные значения
    console.log(`LessonPass: ${LessonPass}`);
    console.log(`TestPass: ${TestPass}`);
    console.log(`TestQuestionСorrect: ${TestQuestionСorrect}`);
    console.log(`BlockPass: ${BlockPass}`);
    console.log(`BlockQuestionСorrect: ${BlockQuestionСorrect}`);


    const goBack = () => navigation.goBack();
    return (
        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
            <View style={commonStyles.Container}>
                <View style={commonStyles.HeaderArea}>
                    <HeaderLessons Title={'ПРОФІЛЬ'} IconLeft={CatSvg} IconRight={LogoSvg}/>
                </View>
                <View style={commonStyles.BodyArea}>


                    <View style={styles.ContainerProgress}>
                        <View style={styles.MainProgress}>
                            <View style={styles.blue}></View>
                            <View style={styles.pink}>
                                <View style={styles.TitleBoxHorizontalProgress}></View>
                                <View style={styles.BoxHorizontalProgress}>
                                    <View style={styles.StatBoxProgress}>
                                        <View style={styles.TitleBoxHorizontalProgress}></View>
                                        <View style={styles.TitleBoxHorizontalProgress}></View>
                                    </View>
                                    <View style={styles.StatBoxProgress}></View>

                                </View>
                            </View>


                            <View style={styles.BoxHorizontalProgress}>
                                <View style={styles.StatBoxProgress}></View>
                                <View style={styles.StatBoxProgress}></View>
                            </View>
                        </View>
                    </View>


                    <View style={commonStyles.TitleTemp}>
                        {/*<Text style={commonStyles.TitleTempText}>Профіль Користувача</Text>
                            <Text style={styles.Text2}>Реєстраційні данні</Text>
                            <Text style={styles.Text2}>Ім'я</Text>
                            <Text style={styles.Text1}>Олексій</Text>
                            <Text style={styles.Text2}>Адреса електроної пошти</Text>
                            <Text style={styles.Text1}>oleksii@gmail.com</Text>
                            <Text style={styles.Text2}>Пароль</Text>
                            <Text style={styles.Text1}>Змінити пароль</Text>
                            <Text style={styles.Text2}>Статистика</Text>
                            <Text style={styles.Text1}>Статистика навчання</Text>
                            <Text style={styles.Text2}>Рейтинг</Text>
                            <Text style={styles.Text1}>Загальний рейтинг</Text>





                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <CircularProgress
                                    radius={40}
                                    strokeWidth={10}
                                    progress={TestPass}
                                    total={TestTotal}
                                    //text="Пройдено тестів"
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:120 }}>
                                <CircularProgress
                                    radius={40}
                                    strokeWidth={10}
                                    progress={TestQuestionСorrect}
                                    total={TestQuestionPass }
                                   // text="Вірних відповідей"
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:120 }}>
                                <CircularProgress
                                    radius={40}
                                    strokeWidth={10}
                                    progress={BlockPass}
                                    total={BlockTotal}
                                    //text="Підсумкових тестів"
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:120 }}>
                                <CircularProgress
                                    radius={40}
                                    strokeWidth={10}
                                    progress={BlockQuestionСorrect}
                                    total={BlockQuestionPass}
                                    //text="Вірних відповідей"
                                />
                            </View>


*/}


                        <TouchableOpacity style={commonStyles.Button} onPress={handleLogout}>
                            <Text style={commonStyles.ButtonText}>Вийти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
        ;
}

const styles = StyleSheet.create({

    ContainerProgress: {
        flex: 1,
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    MainProgress: {
        flex: 1,
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'gray',
    },
    blue: {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue',
        //margin: 10,
    },


    pink:{
        flex: 1,
        width: '100%',
        backgroundColor: 'pink',
        padding:5,
        marginTop: 5,

    },


    BoxHorizontalProgress: {
        flex: 2,
        width: '100%',
        backgroundColor: 'green',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    StatBoxProgress: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        margin: 5,
        flexDirection: 'column',
    },


    TitleBoxHorizontalProgress: {
        flex: 1,
        width: '100%',

        backgroundColor: 'yellow',
    },


    Text1: {

        color: '#00325B',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 0,
    },

    Text2: {

        color: 'gray',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginTop: 0,
    },

});

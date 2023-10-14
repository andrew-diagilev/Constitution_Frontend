import React from "react";
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView,} from 'react-native';
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

                    <ScrollView style={commonStyles.FL}
                                contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',}}>

                        <View style={styles.ContainerProgress}>
                            <View style={styles.MainProgress}>
                                <View style={styles.MainProgressTitle}><Text style={styles.Title1}>Реєстраційні Данні</Text></View>
                                <View style={styles.RegHorizontal}>
                                    <View style={styles.RegInfo}><Text style={styles.Text1}>Ім'я</Text></View>
                                    <View style={styles.RegData}><Text style={styles.Text1}>Олексій</Text></View>
                                </View>
                                <View style={styles.RegHorizontal}>
                                    <View style={styles.RegInfo}><Text style={styles.Text1}><Text style={styles.Text1}>Пошта</Text></Text></View>
                                    <View style={styles.RegData}><Text style={styles.Text1}>oleksii@gmail.com</Text></View>
                                </View>

                                <TouchableOpacity style={styles.Button} onPress={handleLogout}>
                                    <Text style={styles.ButtonText}>Вийти з Додатку</Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                        <View style={styles.ContainerProgress}>
                            <View style={styles.MainProgress}>
                                <View style={styles.MainProgressTitle}><Text style={styles.Title1}>Статистика Навчання</Text></View>


                                <View style={styles.ChartGroupContainer}>
                                    <View style={styles.ChartGroupTitle}><Text style={styles.Title2}>Статистика Проходження Тестів до Уроків</Text></View>
                                    <View style={styles.ChartHorizontal}>
                                        <View style={styles.ChartContainer}>
                                            <View style={styles.ChartTitle}><Text style={styles.Title3}>Пройдено Тестів</Text></View>
                                            <View style={styles.ChartBox}>
                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <CircularProgress
                                                        radius={40}
                                                        strokeWidth={10}
                                                        progress={TestPass}
                                                        total={TestTotal}
                                                        //text="Пройдено тестів"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.ChartContainer}>
                                            <View style={styles.ChartTitle}><Text style={styles.Title3}>Вірних Відповідей</Text></View>
                                            <View style={styles.ChartBox}>
                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <CircularProgress
                                                        radius={40}
                                                        strokeWidth={10}
                                                        progress={TestQuestionСorrect}
                                                        total={TestQuestionPass}
                                                        // text="Вірних відповідей"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>


                                <View style={styles.ChartGroupContainer}>
                                    <View style={styles.ChartGroupTitle}><Text style={styles.Title2}>Статистика Проходження Підсумкових Тестів</Text></View>
                                    <View style={styles.ChartHorizontal}>
                                        <View style={styles.ChartContainer}>
                                            <View style={styles.ChartTitle}><Text style={styles.Title3}>Пройдено Тестів</Text></View>
                                            <View style={styles.ChartBox}>
                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <CircularProgress
                                                        radius={40}
                                                        strokeWidth={10}
                                                        progress={BlockPass}
                                                        total={BlockTotal}
                                                        //text="Підсумкових тестів"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.ChartContainer}>
                                            <View style={styles.ChartTitle}><Text style={styles.Title3}>Вірних Відповідей</Text></View>
                                            <View style={styles.ChartBox}>
                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <CircularProgress
                                                        radius={40}
                                                        strokeWidth={10}
                                                        progress={BlockQuestionСorrect}
                                                        total={BlockQuestionPass}
                                                        //text="Вірних відповідей"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </ScrollView>

                    {/*  <View style={commonStyles.TitleTemp}>
                        <Text style={commonStyles.TitleTempText}>Профіль Користувача</Text>
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





                        <TouchableOpacity style={commonStyles.Button} onPress={handleLogout}>
                            <Text style={commonStyles.ButtonText}>Вийти</Text>
                        </TouchableOpacity>
                    </View>*/}
                </View>
            </View>
        </ImageBackground>
    )
        ;
}

const styles = StyleSheet.create({

    Button: {
        marginTop: 20,
        height: 50,
        width: 300,
        backgroundColor: '#00325B',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },

    ButtonText: {
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: 'bold',
    },



    RegHorizontal:{
        flex: 2,
        width: '100%',
        backgroundColor: 'green',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,

    },

    RegInfo: {
        flex: 1,
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'red',
        justifyContent: 'center',

    },

    RegData: {
        flex: 3,
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'red',
        justifyContent: 'center',
        marginLeft:5,

    },


    Title1: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    Title2: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    Title3: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
    },
    Title4: {},

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

    MainProgressTitle: {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue',
        //margin: 10,
        justifyContent: 'center',
    },


    ChartGroupContainer: {
        flex: 4,
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'red',


    },

    ChartGroupTitle: {
        flex: 1,
        width: '100%',
        padding: 5,
        backgroundColor: 'brown',
        // textAlign: 'center',
        justifyContent: 'center',


    },

    ChartHorizontal: {
        flex: 2,
        width: '100%',
        backgroundColor: 'green',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,


    },

    ChartContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',

    },

    ChartTitle: {
        flex: 1,
        width: '100%',
        backgroundColor: 'grey',
        justifyContent: 'center',

    },

    ChartBox: {
        flex: 3,
        width: '100%',
        backgroundColor: 'green',

    },

    pink: {
        flex: 1,
        width: '100%',
        backgroundColor: 'pink',
        padding: 5,
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

    TextInfo: {

        color: '#00325B',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginTop: 0,


    },

    TextData: {

        color: 'gray',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginTop: 0,
    },

});

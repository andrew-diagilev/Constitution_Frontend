import React, {useEffect, useState} from "react";
import {Button, ImageBackground, Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../assets/styles';
import {LogoSvg, InfoSvg} from '../assets/imgsvg';
import {ImageBg1} from '../assets/imgpaths';
import InfoModal from '../components/InfoModal';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import {executeRequest} from "../components/apiRequests";
import {Formik} from "formik";
import * as Yup from 'yup';
import {TextInput} from "react-native-paper";

//const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset22.png'};
const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset27.png'};
const CELL_COUNT = 4;
const NUM_FIELDS = 3;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введіть коректну адресу електронної пошти')
        .required('Поле \"E-MAIL\" обов\'язкове для заповнення'),
    name: Yup.string()
        .matches(/^[А-Яа-яЁёЇїІіЄє'\s]+$/, 'Поле \"Ваше ім\'я\" повинно містити лише кириличні символи')
        .required('Поле \"Ваше ім\'я\" обов\'язкове для заповнення'),
    password: Yup.string()
        .min(8, 'Пароль повинен містити принаймні 8 символів')
        .required('Поле \"Пароль\" обов\'язкове для заповнення'),
});

const inputColors = {
    activeOutlineColor: 'black',
    activeUnderlineColor: 'blue',
    selectionColor: 'grey',
};

const textInputConfig = [
    {
        name: 'email',
        label: 'E-MAIL',
        secureTextEntry: false,
    },
    {
        name: 'name',
        label: "Ваше ім'я",
        secureTextEntry: false,
    },
    {
        name: 'password',
        label: 'Пароль',
        secureTextEntry: true,
    },
];

export default function Registration({navigation}) {
    const [isInfoModalActive, setIsInfoModalActive] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [value, setValue] = useState('');
    const [codes, setCodes] = useState(Array(NUM_FIELDS).fill(""));
    const [result, setResult] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handleModalVisible = () => {
        setIsInfoModalActive(!isInfoModalActive);
    }

    // Функция, которая вызывается при изменении текста в полях
    const handleCodeChange = () => {
        if (codes.every((code) => code.length === CELL_COUNT)) {
            // Если все поля заполнены, собираем значения из них и объединяем в одну строку
            const combinedCode = codes.join("");
            setResult(combinedCode);
        }
    };


    const fetchCode = async () => {
        try {
            const data = await executeRequest('/api/registration/access_code', 'POST', {},
                {code: result});
            data.success ? setCurrentStep(3) : setIsInfoModalActive(true);
        } catch (error) {
            console.error('Помилка при отриманні коду доступу:', error);
        }

    }
    // Вызывать функцию при каждом изменении значений в полях
    useEffect(() => {
        handleCodeChange();
    }, [codes]);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (<>
                    {/*    <Image source={Image1} style={styles.Image1} />*/}
                    <View style={[commonStyles.LogoRegBox, commonStyles.Shadow]}>
                        <LogoSvg/>
                    </View>
                    <Text style={styles.Text1}>Вивчаємо</Text>
                    <Text style={styles.Text2}>КОНСТИТУЦІЮ</Text>

                    <View style={{width: '100%', alignItems: 'center',}}>
                        <TouchableOpacity style={styles.Button} onPress={() => setCurrentStep(2)}>
                            <Text style={styles.ButtonText}>Зареєструватись</Text>
                        </TouchableOpacity>
                    </View>

                    {/*<TouchableOpacity onPress={() => navigation.navigate('Popup')} style={[commonStyles.InfoBox, commonStyles.Shadow]}>*/}
                    <TouchableOpacity onPress={() => handleModalVisible()}
                                      style={[commonStyles.InfoBox, commonStyles.Shadow]}>
                        <InfoSvg/>
                    </TouchableOpacity>

                    <Text style={styles.Text3}>Освітня програма для дітей</Text></>);
            case 2:
                return (<View style={{width: '100%', alignItems: 'center'}}>
                    {codes.map((code, index) => (
                        <CodeField
                            ref={ref}
                            {...props}
                            key={index}
                            value={code}
                            onChangeText={(text) => {
                                // Создаем копию массива кодов и обновляем значение для соответствующего поля
                                const updatedCodes = [...codes];
                                updatedCodes[index] = text;
                                setCodes(updatedCodes);
                            }}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType={index === 1 ? "default" : "number-pad"}
                            textContentType="oneTimeCode"
                            renderCell={({index, symbol, isFocused}) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                >
                                    {symbol || (isFocused ? <Cursor/> : null)}
                                </Text>
                            )}
                        />))}
                    <TouchableOpacity style={styles.Button} onPress={() => fetchCode()}>
                        <Text style={styles.ButtonText}>Далі</Text>
                    </TouchableOpacity>
                </View>);
            case 3:
                return (<View style={styles.content}>
                    <Formik
                        initialValues={{
                            email: '',
                            firstName: '',
                            userName: '',
                            password: '',
                        }}
                        onSubmit={values => {alert(JSON.stringify(values, null, 2)); Keyboard.dismiss();}}
                        validationSchema={validationSchema}>
                        {({ handleChange, handleSubmit, values, errors }) => (
                            <View>
                                {textInputConfig.map((config, index) => (
                                    <View key={index}>
                                        <TextInput
                                            activeOutlineColor={inputColors.activeOutlineColor}
                                            activeUnderlineColor={inputColors.activeUnderlineColor}
                                            selectionColor={inputColors.selectionColor}
                                            style={styles.textInput}
                                            outlineStyle={styles.textInputOutline}
                                            onChangeText={handleChange(config.name)}
                                            name={config.name}
                                            value={values[config.name]}
                                            label={config.label}
                                            mode="outlined"
                                            secureTextEntry={config.secureTextEntry}

                                        />
                                        {errors[config.name] && <Text>{errors[config.name]}</Text>}
                                    </View>
                                ))}
                                <TouchableOpacity onPress={handleSubmit} style={styles.Button}>
                                    <Text style={styles.ButtonText}>Підтвердити дані</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>);
            default:
                return null;
        }
    };

    return (

        <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg1}>
            <View style={[commonStyles.Container, commonStyles.ContainerReg]}>
                {isInfoModalActive ? <InfoModal handleVisible={() => handleModalVisible()}/> :
                    renderStep()}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    /*Formik*/
    textInput: {
        color: '#FFFFFF',
        marginTop: 10,
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(250,250, 250, 0.7)',

    },

    textInputOutline: {
        borderColor: '#FFFFFF',
        borderRadius: 10,


    },


    content: {
        padding: 16,
    },


    /*AccessCODE*/
    codeFieldRoot: {marginTop: 60},
    cell: {
        marginLeft: 20,
        marginRight: 20,
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },


    ImageBg1: {
        flex: 1,
        verticalAlign: 'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },

    Image1: {

        width: 120,
        height: 161,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },

    Image2: {

        width: 44,
        height: 44,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 70,
    },

    Text1: {

        color: '#00325B',
        textAlign: 'center',
        fontFamily: 'MarmeladRegular',
        fontSize: 40,
        marginTop: 20,
    },

    Text2: {

        color: '#00325B',
        textAlign: 'center',
        fontFamily: 'MarmeladRegular',
        fontSize: 40,

    },

    Text3: {

        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'MarmeladRegular',
        fontSize: 18,
        marginTop: 20,
    },


    Container: {
        flex: 1,
        paddingTop: 100,
        verticalAlign: 'top',
        //backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
    },

    Button: {
        marginTop: 120,
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
    Image: {

        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        resizeMode: 'stretch'

    },
    Shadow: {
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },

});
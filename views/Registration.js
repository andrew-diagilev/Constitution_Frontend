import React, {useEffect, useState} from "react";
import {
    ImageBackground,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Image
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Svg, {Path} from "react-native-svg";
import {commonStyles} from '../assets/styles';
import {LogoSvg, InfoSvg} from '../assets/imgsvg';
import {ImageBg1} from '../assets/imgpaths';
import InfoModal from '../components/InfoModal';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";

//const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset22.png'};
const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset27.png'};
const CELL_COUNT = 4;
const NUM_FIELDS = 3;

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
            console.log(combinedCode);
        }
    };

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
                            keyboardType={index===1 ? "default" : "number-pad"}
                            textContentType="oneTimeCode"
                            renderCell={({index, symbol, isFocused}) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    >
                                    {symbol || (isFocused ? <Cursor/> : null)}
                                </Text>
                            )}
                        />))}</View>);
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


    codeFieldRoot: {marginTop: 60},
    cell: {marginLeft: 20,
        marginRight:20,
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
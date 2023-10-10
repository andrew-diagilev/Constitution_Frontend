import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet, Image} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {commonStyles} from "../../assets/styles";
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset33.png'};
export default function ScoreModalCat({isTestPassed, score, totalQuestions, handleNavigate}) {
    return (





        <Modal animationType="slide" transparent={true} visible={isTestPassed}>





        <View style={{flex: 1, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: COLORS.white, width: '90%', borderRadius: 20, padding: 20, alignItems: 'center'}}>
                <Image source={Image1} style={[styles.Image1]} />
                <Text style={[styles.modalText]}>{score > (totalQuestions / 2) ? 'Ви пройшли тест з результатом:' : 'Ваш результат міг би бути кращим!'}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 20}}>
                    <Text style={{fontSize: 30, color: score > (totalQuestions / 2) ? COLORS.success : COLORS.error}}>{score}</Text>
                    <Text style={{fontSize: 20, color: COLORS.black}}>/ {totalQuestions}</Text>
                </View>
                <TouchableOpacity onPress={handleNavigate} style={styles.button}>
                    <Text style={{textAlign: 'center', color: COLORS.white, fontSize: 20}}>ОК</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>)
};

const styles = StyleSheet.create({

    Image1: {

        width: 120,
        height: 161,
        //  alignItems: 'center',
        //   alignSelf: 'center',
        marginTop: 0,
        //  marginBottom: 20,

    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
    modalView: {
        width: '90%',
        //  margin: 20,
        backgroundColor: 'rgba(0, 50, 91, 0.1)',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        verticalAlign:"middle",
        backgroundColor: '#00325B',
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#00325B',
    },
    textStyle: {
        color:'#00325B',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontStyle:'italic',
        fontSize: 18,
        fontWeight:'bold',
    },
    modalText: {
        fontFamily:'Roboto',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        verticalAlign:"middle",
        fontSize: 24,
        color:'#00325B',
    },
});
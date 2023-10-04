import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {commonStyles} from "../assets/styles";

const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset33.png'};
export default function ModalInfo({handleVisible, modalText}) {
    return (
        <View style={[styles.View1,{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }]}>
            <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    handleVisible();
                }}>
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Image source={Image1} style={[styles.Image1,commonStyles.Shadow]} />
                        <Text style={styles.modalText}>{/*У цьому вікні ви можете побачити потрібну та корисну інформацію, яка допоможе вам краще взаємодіяти з нашим додатком.*/modalText}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleVisible}>
                            <Text style={styles.textStyle}>Закрити</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
{/*            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>*/}
        </View>
    );
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
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#00325B',
    },
    textStyle: {
        color:'#ffffff',
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
        fontSize: 16,
    },
});

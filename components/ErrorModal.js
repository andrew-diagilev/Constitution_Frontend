import React from 'react';
import {Modal, Text, View, Pressable, StyleSheet} from 'react-native';
import {commonStyles} from "../assets/styles";
import {BlurView} from 'expo-blur';
import {ErrorIconSvg} from "../assets/imgsvg";

export function ErrorModal({visible, errorMessage, onClose}) {
    return (

            <View>
                <Modal
                    visible={visible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => {
                    }}>
                    <BlurView intensity={25} style={styles.blurContainer}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <ErrorIconSvg SvgStyle={[commonStyles.Shadow]} />
                            <Text style={styles.modalText}>{errorMessage}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={onClose}>
                                <Text style={styles.textStyle}>Закрити</Text>
                            </Pressable>
                        </View>
                    </View>
                    </BlurView>
                </Modal>
</View>

    );
}

const styles = StyleSheet.create({

    blurContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },

    centeredView: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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
        width: '80%',
        height: 50,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#00325B',
    },
    textStyle: {
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalText: {
        fontFamily: 'Roboto',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        fontSize: 16,
    },
});
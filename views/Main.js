import {StatusBar} from 'expo-status-bar';
import React from "react";

import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';


export default function Main({navigation}) {
    return (

            <View style={styles.container}>
                <Text onPress={() => navigation.navigate('Lessons')} style={styles.button}>УРОКИ</Text>
                <Text onPress={() => navigation.navigate('Abstracts')} style={styles.button}>КОНСПЕКТИ</Text>
                <Text onPress={() => navigation.navigate('Tests')} style={styles.button}>ТЕСТИ</Text>
                <Text onPress={() => navigation.navigate('Profile')} style={styles.button}>ПРОФІЛЬ</Text>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbbbb',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        height: 30,
        alignSelf: "center",
        width: 300,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#158420'
    },
});



import {StatusBar} from 'expo-status-bar';
import React from "react";

import {Button, StyleSheet, Text, TextInput, View} from 'react-native';


export default function Abstracts({navigation}) {
    const goBack = () => navigation.goBack();
    return (
        <View>

            <Text>Конспекти </Text>

        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

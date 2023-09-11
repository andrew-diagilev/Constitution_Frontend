import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from "react";

import {Button, StyleSheet, Text, TextInput, View} from 'react-native';


export default function Abstract({route}) {
    const [abstract, setAbstract] = useState([]);
    const lessonId = route.params;
    console.log(route.params);
    useEffect(() => {
        fetchAbstract();
    }, []);

    const fetchAbstract = async () => {
        try {
            const response = await fetch('http://217.20.181.185:8080/api/summaries/'+lessonId);
            if (!response.ok) {
                const errorData = await response.text(); // Получаем тело ответа из ошибки
                throw new Error(`Запит завершився помилкою ${response.status}: ${errorData}`);
            }
            const data = await response.json();
            setAbstract(data);
        } catch (error) {
            console.error('Ошибка при получении даних:', error);
        }
    };

    return (
        <View>

            <Text>{abstract.text}</Text>

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

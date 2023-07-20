import {StatusBar} from 'expo-status-bar';
import React from "react";
import {Video} from 'expo-av';
import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


export default function Lesson({navigation, route}) {
    const goBack = () => navigation.goBack();
    const lesson = route.params;
    console.log(lesson);
    // Здесь можно использовать значение lessonId
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View>
            {/* Вывод значения lessonId */}
            <Text>Урок {lesson.id}</Text>
            <Text>{lesson.title}</Text>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: lesson.videoUrl,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.description}>
                <Text style={{fontSize: 19,}}>{route.params.description}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Test')}>
                <Text style={styles.buttonText}>Перейти до тесту</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Abstract', lesson.id)}>
                <Text style={styles.buttonText}>Подивитись конспект</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText}>До головного Меню</Text>
            </TouchableOpacity>


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
    video: {
        alignSelf: 'center',
        width: 400,
        height: 250,
    },
    description: {
        fontSize: 30,
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

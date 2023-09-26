import {StatusBar} from 'expo-status-bar';
import React from "react";
import {Video} from 'expo-av';
import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import HTML from 'react-native-render-html';


export default function Lesson({navigation, route}) {
    const goBack = () => navigation.goBack();
    const lesson = route.params;
    console.log(lesson);
    // Здесь можно использовать значение lessonId
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [initialPlayStatus, setInitialPlayStatus] = React.useState(true);

    const handleImagePress = () => {
        if (status.isPlaying) {
            video.current.pauseAsync();
        } else {
            video.current.playAsync();
        }
        setInitialPlayStatus(false); // Скрыть картинку после первого нажатия
    };
    const htmlContent = "<p>This is <b>HTML</b> content.</p>";
    const htmlStyle = {p:{fontSize:40}, div:{paddingTop:20}};
    return (
        <View>

            <HTML tagsStyles = {htmlStyle} source={{ html: htmlContent }} />

            {/* Вывод значения lessonId */}
            <Text>Урок {lesson.id}</Text>
            <Text>{lesson.title}</Text>

            <View>
                {initialPlayStatus && (
                    <View style={styles.thumb}>
                        <TouchableOpacity onPress={handleImagePress}>
                            <Image style={{width: '100%', height: '100%'}} source={require('../assets/prev.png')}/>
                        </TouchableOpacity>
                    </View>)}
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: lesson.videoUrl,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping={false}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
            <View style={styles.description}>
                <Text style={{fontSize: 19,}}>{route.params.description}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Test', lesson.id)}>
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
        height: 225,
        zIndex: 1,
    },
    thumb: {
        alignSelf: 'center',
        position: "absolute",

        width: 400, // Установите желаемую ширину, такую же, как у видео
        height: 225, // Установите желаемую высоту, такую же, как у видео
        /*        alignItems: 'center',
                justifyContent: 'center',*/
        zIndex: 2,

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

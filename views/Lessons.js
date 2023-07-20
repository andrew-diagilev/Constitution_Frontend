import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from "react";

import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


export default function Lessons({navigation}) {
    const goBack = () => navigation.goBack();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetchLessons();
    }, []);

    const fetchLessons = async () => {
        try {
            const response = await fetch('http://217.20.181.185:8080/api/lessons');
            const data = await response.json();
            setLessons(data);
        } catch (error) {
            console.error('Ошибка при получении уроков:', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* <FlatList data={lessons} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Lesson', item)}>
                    <Text>{item.name}</Text>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
            />*/}

            <FlatList style={{width: 400}} data={lessons} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Lesson', item)}>
                    <View style={styles.LessonCard}>
                        <View style={styles.LessonCardHeader}>
                            <Text style={styles._5}>{item.name}</Text>
                        </View>
                        {/*<View style={styles.Group959}>

                        </View>*/}
                        {/* <View style={styles.BarsTabBarXGlyph}>
                            <Text style={styles.Symbol}>􀋃</Text>
                        </View>*/}
                        <Text style={styles.Description}>{item.title}</Text>
                        <View>
                            <Text style={{backgroundColor: '#36ad91', borderRadius: 10, width: 130, height: 30, }}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a494d2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LessonCard: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 25,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 380,
        height: 200,
        marginTop: 25,
        marginLeft: 10,
        marginRight: 100,
        paddingBottom: 21,
        boxSizing: "border-box",
        backgroundColor: '#fff',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,

    },
    LessonCardHeader: {
        paddingLeft: 10,
        paddingTop: 10,
        height: 60,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#b3c7d5',
        align: "center",
    },


    Group959: {
        display: "flex",
        flexDirection: "column",
        height: 100,
        boxSizing: "border-box",
    },
    _5: {

        fontSize: 15,
        fontWeight: "700",
    },
    Description: {
        color: "rgb(11,45,77)",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 700,
    },
    BarsTabBarXGlyph: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 100,
        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 5,
        paddingBottom: 4.24,
        boxSizing: "border-box",
    },
    Symbol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(26,109,34,1)",
        fontSize: 17,
        lineHeight: 17,
        fontWeight: 400,
        textAlign: "center",
        letterSpacing: 0,
    }

});

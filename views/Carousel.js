import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = [
    { id: '1', color: 'red', number: '1' },
    { id: '2', color: 'blue', number: '2' },
    { id: '3', color: 'green', number: '3' },
    { id: '4', color: 'yellow', number: '4' },
    { id: '5', color: 'purple', number: '5' },
];

const itemWidth = screenWidth - 40; // Ширина слайда с учетом отступов

const Carousel = () => {
    return (
        <FlatList
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <View style={[styles.slide, { backgroundColor: item.color, width: itemWidth }]}>
                    <Text style={styles.slideText}>{item.number}</Text>
                </View>
            )}
            contentContainerStyle={{ paddingHorizontal: 20 }}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10, // Отступы между слайдами
        borderRadius: 10, // Для закругления углов слайдов
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    slideText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Carousel;

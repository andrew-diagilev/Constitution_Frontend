import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';







const CircularProgress = ({ radius, progress, total, text }) => {
    const adjustedTotal = total === 0 ? 0.0001 : total;
    const progressPercentage = Math.floor((progress / adjustedTotal) * 100);

    return (
        <View>
            <ProgressCircle
                percent={progressPercentage}
                radius={radius}
                borderWidth={8}
                color="#007AFF"
                bgColor="#ccc"
                textStyle={styles.textStyle}
            >
                <Text style={styles.percentageText}>{`${progressPercentage}%`}</Text>
                <Text style={styles.infoText}>{`${progress} / ${total}`}</Text>

            </ProgressCircle>


    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // Добавьте это свойство
        color: '#007AFF',
    },
    percentageText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Добавьте это свойство
    },
    infoText: {
        fontSize: 12,
        textAlign: 'center', // Добавьте это свойство
    },
});

export default CircularProgress;

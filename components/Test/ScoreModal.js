import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default function ScoreModal({isTestPassed, score, totalQuestions, handleNavigate}) {
    return (<Modal animationType="slide" transparent={true} visible={isTestPassed}>
        <View style={{flex: 1, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{
                backgroundColor: COLORS.white, width: '90%', borderRadius: 20, padding: 20, alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 30, fontWeight: 'bold'
                }}>{score > (totalQuestions / 2) ? 'Ви пройшли тест з результатом:' : 'Ваш результат міг би бути кращим!'}</Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 20
                }}>
                    <Text style={{
                        fontSize: 30, color: score > (totalQuestions / 2) ? COLORS.success : COLORS.error
                    }}>{score}</Text>
                    <Text style={{fontSize: 20, color: COLORS.black}}>/ {totalQuestions}</Text>
                </View>
                <TouchableOpacity onPress={handleNavigate} style={{
                    backgroundColor: COLORS.accent, padding: 20, width: '100%', borderRadius: 20
                }}>
                    <Text style={{textAlign: 'center', color: COLORS.white, fontSize: 20}}>ОК</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>)
};
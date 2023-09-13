import React from 'react';
import { View, Animated } from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default function ProgressBar({ progressAnim }) {
    return (
        <View style={{ width: '100%', height: 20, borderRadius: 20, backgroundColor: '#00000020' }}>
            <Animated.View style={[{ height: 20, borderRadius: 20, backgroundColor: COLORS.accent }, { width: progressAnim }]} />
        </View>
    );
}
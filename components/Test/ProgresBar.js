import React from 'react';
import {View, Animated, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {StarSvg} from "../../assets/imgsvg";
import {commonStyles} from "../../assets/styles";

export default function ProgressBar({ progressAnim }) {
    return (
        <View style={{width:'100%', flexDirection:'row',alignItems: 'center',
            verticalAlign:"middle", }}>
            <View style={{ width: '80%', height: 10, borderRadius: 20, backgroundColor: '#ffffff' }}>
                <Animated.View style={[{ height: 10, borderRadius: 20, backgroundColor: '#00325B' }, { width: progressAnim }]} />
            </View>

            <View style={[commonStyles.RoundProgress]}>
                <Text style={commonStyles.CounterTextTest}>1 / 4</Text>
            </View>

        </View>
    );
}
import React from "react";
import {
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import {ArrowLeftSvg, CatSvg, TestsSvg, AbstractsSvg, TreeSvg, LogoSvg} from '../assets/imgsvg';
import {commonStyles} from "../assets/styles";

export default function HeaderLessons({Title, IconLeft, IconRight}) {
    return (<View style={commonStyles.Header}>
            <View style={commonStyles.HeaderLeft}>
                <View style={commonStyles.HeaderItem}>
                    <View style={[commonStyles.HeaderIconBox]}>
                        {/*<TreeSvg SvgStyle={[commonStyles.IconStyleHeader]}/>*/}
                        <IconLeft SvgStyle={[commonStyles.IconStyleHeader, commonStyles.Shadow]}/>
                    </View>
                </View>
            </View>
            <View style={commonStyles.HeaderCenter}>
                <Text style={commonStyles.TitleHeader}>{Title}</Text>
            </View>
            <View style={commonStyles.HeaderRight}>
                <View style={commonStyles.HeaderItem}>
                    <View style={[commonStyles.HeaderIconBox]}>
                        <IconRight SvgStyle={[commonStyles.IconStyleHeader, commonStyles.Shadow]}/>
                    </View>
                </View>
            </View>
        </View>);
}

const styles = StyleSheet.create({});
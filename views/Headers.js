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
                    <View style={[commonStyles.HeaderIconBox, commonStyles.Shadow]}>
                        {/*<TreeSvg SvgStyle={[commonStyles.IconStyleHeader]}/>*/}
                        <IconLeft SvgStyle={[commonStyles.IconStyleHeader]}/>
                    </View>
                </View>
            </View>
            <View style={commonStyles.HeaderCenter}>
                <Text style={commonStyles.TitleHeader}>{Title}</Text>
            </View>
            <View style={commonStyles.HeaderRight}>
                <View style={commonStyles.HeaderItem}>
                    <View style={[commonStyles.HeaderIconBox, commonStyles.Shadow]}>
                        <IconRight/>
                    </View>
                </View>
            </View>
        </View>);
}

const styles = StyleSheet.create({});
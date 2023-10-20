import React from "react";
import {Text, View} from 'react-native';
import {commonStyles} from "../assets/styles";

export default function HeaderLessons({Title, IconLeft, IconRight}) {
    return (<View style={commonStyles.Header}>
            <View style={commonStyles.HeaderLeft}>
                <View style={commonStyles.HeaderItem}>
                    <View style={[commonStyles.HeaderIconBox]}>
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
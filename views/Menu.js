import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {ArrowLeftSvg, CatSvg, TestsSvg, AbstractsSvg, TreeSvg} from '../assets/imgsvg';
import {commonStyles} from "../assets/styles";
import {useRouteContext} from "../components/RootContext";

export default function Menu({navigation}) {
    const screens = ['LessonsNN', 'Abstracts', 'Abstract', 'Test', 'Tests', 'LessonN', 'Profile', 'FinalTest'];
    const {currentRoute} = useRouteContext();
    return (
        screens.includes(currentRoute) &&
        <View style={commonStyles.MenuArea}>
            {/* <Text>{currentRoute}</Text>*/}
            <View style={commonStyles.MenuContainer}>
                <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.goBack()}>
                    <View style={commonStyles.MenuIconContainer}>
                        <View style={[commonStyles.MenuIconBox]}>
                            <ArrowLeftSvg SvgStyle={[commonStyles.IconStyleMenu, commonStyles.Shadow]}/>
                        </View>
                    </View>
                    <Text style={commonStyles.MenuText}>Назад</Text>
                </TouchableOpacity>
                <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('LessonsNN')}>
                    <View style={commonStyles.MenuIconContainer}>
                        <View style={[commonStyles.MenuIconBox]}>
                            <TreeSvg SvgStyle={[commonStyles.IconStyleMenu, commonStyles.Shadow]}/>
                        </View>
                    </View>
                    <Text style={commonStyles.MenuText}>Уроки</Text>
                </TouchableOpacity>
                <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('Abstracts')}>
                    <View style={commonStyles.MenuIconContainer}>
                        <View style={[commonStyles.MenuIconBox]}>
                            <AbstractsSvg SvgStyle={[commonStyles.IconStyleMenu, commonStyles.Shadow]}/>
                        </View>
                    </View>
                    <Text style={commonStyles.MenuText}>Конспекти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('Tests')}>
                    <View style={commonStyles.MenuIconContainer}>
                        <View style={[commonStyles.MenuIconBox]}>
                            <TestsSvg SvgStyle={[commonStyles.IconStyleMenu, commonStyles.Shadow]}/>
                        </View>
                    </View>
                    <Text style={commonStyles.MenuText}>Тести</Text>
                </TouchableOpacity>
                <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('Profile')}>
                    <View style={commonStyles.MenuIconContainer}>
                        <View style={[commonStyles.MenuIconBox]}>
                            <CatSvg SvgStyle={[commonStyles.IconStyleMenu, commonStyles.Shadow]}/>
                        </View>
                    </View>
                    <Text style={commonStyles.MenuText}>Профіль</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
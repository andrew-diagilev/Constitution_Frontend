import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    ArrowLeftSvg,
    TreeSvgMenu,
    CatSvg, TestsSvg,AbstractsSvg
} from '../assets/imgsvg';
import {commonStyles} from "../assets/styles";
import { ImageBg1, ImageBg2, Lesson1 } from '../assets/imgpaths';
import {useRouteContext} from "../components/RootContext";


//const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset33.png'};


export default function Menu({navigation}) {
    const screens = [ 'LessonsNN', 'Abstracts', 'Abstract', 'Test','Tests', 'LessonN','Profile',];
    const { currentRoute } = useRouteContext();
    return (
        screens.includes(currentRoute) &&
                <View style={commonStyles.MenuArea}>
                    {/* <Text>{currentRoute}</Text>*/}
                    <View style={commonStyles.MenuContainer}>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.goBack()}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <ArrowLeftSvg/>
                                </View>
                            </View>
                            <Text style={commonStyles.MenuText}>Назад</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('LessonsNN')}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <TreeSvgMenu/>
                                </View>
                            </View>
                            <Text style={commonStyles.MenuText}>Уроки</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('Abstracts')}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <AbstractsSvg/>
                                </View>
                            </View>
                            <Text style={commonStyles.MenuText}>Конспекти</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('Tests')}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <TestsSvg/>
                                </View>
                            </View>
                            <Text style={commonStyles.MenuText}>Тести</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.MenuItem} onPress={() => navigation.navigate('Profile')}>
                            <View style={ commonStyles.MenuIconContainer}>
                                <View style={[commonStyles.MenuIconBox, commonStyles.Shadow]  }>
                                    <CatSvg />
                                </View>
                            </View>
                            <Text style={commonStyles.MenuText}>Профіль</Text>
                        </TouchableOpacity>

                    </View>
                </View>
    );}

const styles = StyleSheet.create({
    Cat:{

        alignItems: 'center',
        justifyContent: 'center'
    }, // Выравнивание по центру по горизонтали},

    Round: {
        height:180,
        width: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: '100%',
        alignItems: 'center',
        // verticalAlign:"middle",
        justifyContent: 'center', // Выравнивание по центру по горизонтали
        // marginLeft: -10,
        // marginRight: 10,

    },

    ImageBg1: {
        flex: 1,
        verticalAlign:'top',
        //  justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },

    Image1: {

        width: 120,
        height: 161,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },

    Image2: {

        width: 44,
        height: 44,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 70,
    },

    Text1: {

        color:'#00325B',
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 30,
        marginTop: 20,
    },

    Text2: {

        color:'#911F1E',
        textAlign:'center',
        fontFamily:'MarmeladRegular',
        fontSize: 56,

    },

    Text3: {

        color:'#00325B',
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize: 18,
        //marginTop: 20,
    },


    Container: {
        flex: 1,
      //  paddingTop: 100,
      //  verticalAlign:'top',
       // backgroundColor: '#ffffff',
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },

    Button: {
        marginTop: 120,
        height:50,
        width: 300,
        backgroundColor: '#00325B',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },


    ButtonText: {

        color:'#ffffff',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Roboto',
        fontStyle:'italic',
        fontSize: 18,
        fontWeight:'bold',



    },
    Image: {

        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        resizeMode: 'stretch'

    },
    Shadow: {
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 5,
            height: 5,
        },
    },
});
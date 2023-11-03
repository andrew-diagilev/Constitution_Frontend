import React, {useState} from "react";
import {ImageBackground, Text, TouchableOpacity, View, Image} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {commonStyles} from "../assets/styles";
import {ImageBg1} from '../assets/imgpaths';
import {InfoSvg, LogoSvg} from "../assets/imgsvg";
import InfoModal from "../components/InfoModal";
import LessonStat from "./LessonStat";
//const ImageBg1 = require('../img/bg-v01.png');
//const ImageBg1 = {uri: 'https://opossum.com.ua/constitution/bg01.png'};
const Image1 = {uri: 'https://opossum.com.ua/constitution/Asset22.png'};
const Image2 = {uri: 'https://opossum.com.ua/constitution/Asset23.png'};
const Image3 = {uri: 'https://opossum.com.ua/constitution/Asset24.png'};
const Image4 = {uri: 'https://opossum.com.ua/constitution/Asset25.png'};
const Image5 = {uri: 'https://opossum.com.ua/constitution/Asset26.png'};
const Image6 = {uri: 'https://opossum.com.ua/constitution/Asset27.png'};

const ColorImage6 = {fill: '#000000'};
const modalText = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Вивчайте уроки:</Text>
            </View>
            <Text style={{ marginBottom: 10 }}>
                Поглиблюйте свої знання, переглядаючи уроки, які включають відеоматеріали та перевіряйте свої навички за допомогою тестів.
            </Text>
            <Text style={{ marginBottom: 10 }}>
                <LessonStat/> Індикатор показує кількість правильних відповідей, кількість відповідей користувача, загальна к-ть питань до уроку.
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Закріплюйте через конспекти:</Text>
            </View>
            <Text style={{ marginBottom: 10 }}>
                Отримайте швидкий доступ до конспектів для зручного узагальнення матеріалу.
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Тести для перевірки:</Text>
            </View>
            <Text style={{ marginBottom: 10 }}>
                Перевірте свої знання, проходячи тести для кожного блоку уроків.
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Профіль і прогрес:</Text>
            </View>
            <Text>
                Перегляньте свою особисту інформацію та відстежуйте прогрес у проходженні тестів.
            </Text>
        </View>
    );
}

export default function Main({navigation}) {
    const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);

    const showInfoModal = () => {
        setIsInfoModalVisible(true);
    };

    const hideInfoModal = () => {
        setIsInfoModalVisible(false);
    };


    return (
        <>
            <InfoModal modalText={modalText()} handleVisible={hideInfoModal} visible={isInfoModalVisible}/>

            <ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
                <View style={[commonStyles.Container, commonStyles.ContainerMain]}>
                    {/*<Image source={Image1} style={commonStyles.ImageMain01} />*/}
                    <View style={{width: '100%', alignItems: 'center',}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Lessons')}
                                          style={[commonStyles.Shadow, commonStyles.ButtonMain, commonStyles.ButtonMain01]}>
                            <Image source={Image2} style={commonStyles.ImageMain02}/>
                            <Text style={commonStyles.TextButtonMain}>УРОКИ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Abstracts')}
                                          style={[commonStyles.Shadow, commonStyles.ButtonMain, commonStyles.ButtonMain02]}>
                            <Image source={Image3} style={commonStyles.ImageMain03}/>
                            <Text style={commonStyles.TextButtonMain}>КОНСПЕКТИ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Tests')}
                                          style={[commonStyles.Shadow, commonStyles.ButtonMain, commonStyles.ButtonMain03]}>
                            <Image source={Image4} style={commonStyles.ImageMain04}/>
                            <Text style={commonStyles.TextButtonMain}>ТЕСТИ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                                          style={[commonStyles.Shadow, commonStyles.ButtonMain, commonStyles.ButtonMain04]}>
                            <Image source={Image5} style={commonStyles.ImageMain05}/>
                            <Text style={commonStyles.TextButtonMain}>ПРОФІЛЬ</Text>
                        </TouchableOpacity>
                        {/* <Image source={Image6} style={commonStyles.ImageMain06} /> */}
                    </View>
                    <TouchableOpacity onPress={showInfoModal}
                                      style={[commonStyles.InfoBox]}>
                        <InfoSvg SvgStyle={[commonStyles.ColorInfo, commonStyles.Shadow]}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground></>
    );
}



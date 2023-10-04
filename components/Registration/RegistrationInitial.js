import React, {useState}  from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {commonStyles} from "../../assets/styles";
import {InfoSvg, LogoSvg} from "../../assets/imgsvg";
import {ImageBg1} from "../../assets/imgpaths";
import InfoModal from "../InfoModal";

export default function RegistrationInitial({handelNextStep, handleModalVisible, handelNavigateToAuth}) {
    const [isInfoModalActive, setIsInfoModalActive] = useState(false);



    return (<>
        {/*    <Image source={Image1} style={styles.Image1} />*/}
        <View style={[commonStyles.LogoRegBox, commonStyles.Shadow]}>
            <LogoSvg/>
        </View>
        <Text style={styles.Text1}>Вивчаємо</Text>
        <Text style={styles.Text2}>КОНСТИТУЦІЮ</Text>

        <View style={{width: '100%', alignItems: 'center',}}>
            <TouchableOpacity style={styles.Button} onPress={handelNextStep}>
                <Text style={styles.ButtonText}>Зареєструватись</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={handelNavigateToAuth}>
                <Text style={styles.ButtonText}>Пройти авторизацію</Text>
            </TouchableOpacity>
        </View>

        {/*<TouchableOpacity onPress={() => navigation.navigate('Popup')} style={[commonStyles.InfoBox, commonStyles.Shadow]}>*/}
        <TouchableOpacity onPress={() => handleModalVisible()}
                          style={[commonStyles.InfoBox, commonStyles.Shadow]}>
            <InfoSvg/>
        </TouchableOpacity>

        <Text style={styles.Text3}>Освітня програма для дітей</Text></>);
}

const styles = StyleSheet.create({
    Text1: {
        color: '#00325B',
        textAlign: 'center',
        fontFamily: 'MarmeladRegular',
        fontSize: 40,
        marginTop: 20,
    },

    Text2: {
        color: '#00325B',
        textAlign: 'center',
        fontFamily: 'MarmeladRegular',
        fontSize: 40,

    },

    Text3: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'MarmeladRegular',
        fontSize: 18,
        marginTop: 20,
    },

    Button: {
        marginTop: 60,
        height: 50,
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
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
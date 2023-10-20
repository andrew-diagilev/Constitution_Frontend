import React, {useState} from "react";
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {commonStyles} from '../assets/styles';
import {ImageBg1, ImageBg2} from '../assets/imgpaths';
import InfoModal from '../components/InfoModal';
import {executeRequest} from "../components/apiRequests";
import AccessCodeForm from "../components/Registration/AccessCodeForm";
import RegistrationForm from "../components/Registration/RegistrationForm";
import RegistrationInitial from "../components/Registration/RegistrationInitial";
import {navigate} from "../components/RootNavigator";
import {useErrorModal} from "../components/ErrorModalProvider";
import PressableMessageLink from "../components/common/PressableMessegeLink";


export default function Registration({navigation}) {
    const [isInfoModalActive, setIsInfoModalActive] = useState(false);
    const [infoModalText, setInfoModalText] = useState("При реєстрації необхідно ввести спеціальний код доступу. Код доступу надається вашим керівником, вчителем, куратором або іншою відповідальною особою. Після введення коду вам потрібно вказати облікові дані, включаючи адресу електронної пошти, ім'я та пароль. Після введення цих даних очікуйте листа з посиланням для активації доступу. Після активації оберіть пункт \"Авторизація\" та введіть свій логін (адресу електронної пошти) та пароль.")
    const [currentStep, setCurrentStep] = useState(1);
    const [result, setResult] = useState("");
    const {showErrorModal} = useErrorModal();

    const handleModalVisible = () => {
        setIsInfoModalActive(!isInfoModalActive);
    }

    const handelNavigateToAuth = () => {
        navigation.navigate("Auth");
    }

    const handleStep2 = () => setCurrentStep(2)

    const fetchCode = async () => {
        try {
            const data = await executeRequest('/api/registration/access_code', 'POST', {}, {code: result});
            data && setCurrentStep(3);
        } catch (error) {
            showErrorModal(error.response.data);
        }
    }

    const fetchRegistration = async (userData) => {
        try {
            const data = await executeRequest('/api/registration/register_user', 'POST', {}, userData);
            if (data) navigate('Auth');
        } catch (error) {
            const errorMessage = 'Помилка при реєстрації: ' + error;
            setInfoModalText(errorMessage);
            setIsInfoModalActive(true);
            console.error(errorMessage);
        }
    }

    const renderLink = () => {
        return (
            <PressableMessageLink onPress={() => setCurrentStep(1)} MessageText={"У вас вже є обліковий запис? "} LinkText={"До авторизації"}/>);
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (<RegistrationInitial handelNavigateToAuth={handelNavigateToAuth} handelNextStep={handleStep2} handleModalVisible={() => handleModalVisible()}/>);
            case 2:
                return (<><AccessCodeForm onNext={() => fetchCode()} result={result} setResult={setResult}/>{renderLink()}</>);
            case 3:
                return (<><RegistrationForm onRegister={(userData) => fetchRegistration(userData)} accessCode={result}/>{renderLink()}</>);
            default:
                return null;
        }
    };

    return (<ImageBackground source={ImageBg1} resizeMode="cover" style={commonStyles.ImageBg}>
        <View style={[commonStyles.Container, commonStyles.ContainerReg]}>
            {isInfoModalActive ? <InfoModal handleVisible={() => handleModalVisible()} modalText={infoModalText}/> : renderStep()}
        </View>
    </ImageBackground>);
}
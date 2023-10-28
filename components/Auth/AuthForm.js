import React from "react";
import * as Yup from "yup";
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import {TextInput} from "react-native-paper";

const validationSchema = Yup.object().shape({
    userName: Yup.string()
        .email('Введіть коректну адресу електронної пошти')
        .required('Поле \"E-MAIL\" обов\'язкове для заповнення'),
    password: Yup.string()
        .min(8, 'Пароль повинен містити принаймні 8 символів')
        .required('Поле \"Пароль\" обов\'язкове для заповнення'),
});

const textInputConfig = [
    {
        name: 'userName',
        label: 'E-MAIL',
        secureTextEntry: false,
    },
    {
        name: 'password',
        label: 'Пароль',
        secureTextEntry: true,
    },
];

const inputColors = {
    activeOutlineColor: 'black',
    activeUnderlineColor: 'blue',
    selectionColor: 'grey',
};

export default function AuthForm({onAuth}) {
    return (<View style={styles.content}>
        <Formik
            initialValues={{
                userName: '',
                password: '',
            }}
            onSubmit={values => {
                onAuth(values.userName, values.password);
                /*alert(JSON.stringify(values, null, 2));*/
                Keyboard.dismiss();
            }}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, values, errors}) => (
                <View>
                    {textInputConfig.map((config, index) => (
                        <View key={index}>
                            <TextInput
                                activeOutlineColor={inputColors.activeOutlineColor}
                                activeUnderlineColor={inputColors.activeUnderlineColor}
                                selectionColor={inputColors.selectionColor}
                                style={styles.textInput}
                                outlineStyle={styles.textInputOutline}
                                onChangeText={handleChange(config.name)}
                                name={config.name}
                                value={values[config.name]}
                                label={config.label}
                                mode="outlined"
                                secureTextEntry={config.secureTextEntry}

                            />
                            {errors[config.name] && <Text style={{ color: 'red' }}>{errors[config.name]}</Text>}
                        </View>
                    ))}
                    <TouchableOpacity onPress={handleSubmit} style={styles.Button}>
                        <Text style={styles.ButtonText}>Авторизація</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    </View>);
}

const styles = StyleSheet.create({
    /*Formik*/
    textInput: {
        color: '#FFFFFF',
        marginTop: 10,
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(250,250, 250, 0.7)',

    },

    textInputOutline: {
        borderColor: '#FFFFFF',
        borderRadius: 10,
    },

    content: {
        padding: 16,
    },

    Button: {
        marginTop: 120,
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
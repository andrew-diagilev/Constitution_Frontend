import React from "react";
import * as Yup from "yup";
import {Keyboard, Text, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import {TextInput} from "react-native-paper";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введіть коректну адресу електронної пошти')
        .required('Поле \"E-MAIL\" обов\'язкове для заповнення'),
    name: Yup.string()
        .matches(/^[А-Яа-яЁёЇїІіЄє'\s]+$/, 'Поле \"Ваше ім\'я\" повинно містити лише кириличні символи')
        .required('Поле \"Ваше ім\'я\" обов\'язкове для заповнення'),
    password: Yup.string()
        .min(8, 'Пароль повинен містити принаймні 8 символів')
        .required('Поле \"Пароль\" обов\'язкове для заповнення'),
});

const textInputConfig = [
    {
        name: 'email',
        label: 'E-MAIL',
        secureTextEntry: false,
    },
    {
        name: 'name',
        label: "Ваше ім'я",
        secureTextEntry: false,
    },
    {
        name: 'password',
        label: 'Пароль',
        secureTextEntry: true,
    },
];


export default function RegistrationForm({}) {
    return (<View style={styles.content}>
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                userName: '',
                password: '',
            }}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
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
                            {errors[config.name] && <Text>{errors[config.name]}</Text>}
                        </View>
                    ))}
                    <TouchableOpacity onPress={handleSubmit} style={styles.Button}>
                        <Text style={styles.ButtonText}>Підтвердити дані</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    </View>);
}

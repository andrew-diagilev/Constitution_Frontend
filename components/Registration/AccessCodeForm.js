import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {commonStyles} from "../../assets/styles";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

const CELL_COUNT = 4;
const NUM_FIELDS = 3;

export default function  AccessCodeForm({onNext, result, setResult}) {
    const [value, setValue] = useState('');
    const [codes, setCodes] = useState(Array(NUM_FIELDS).fill(""));
    const ref = useBlurOnFulfill({value: result, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handleCodeChange = () => {
        if (codes.every((code) => code.length === CELL_COUNT)) {
            const combinedCode = codes.join("");
            setResult(combinedCode); // Вызываем onNext с объединенным кодом
        }
    };

    useEffect(() => {
        handleCodeChange();
    }, [codes]);

    return (
        <View style={{width: '100%', alignItems: 'center'}}>
            {codes.map((code, index) => (
                <CodeField
                    ref={ref}
                    {...props}
                    key={index}
                    value={code}
                    onChangeText={(text) => {
                        const updatedCodes = [...codes];
                        updatedCodes[index] = text;
                        setCodes(updatedCodes);
                    }}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType={index === 1 ? "default" : "number-pad"}
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                        >
                            {symbol || (isFocused ? <Cursor/> : null)}
                        </Text>
                    )}
                />
            ))}
            <TouchableOpacity style={styles.Button} onPress={onNext}>
                <Text style={styles.ButtonText}>Далі</Text>
            </TouchableOpacity>
        </View>
    );
}
    const styles = StyleSheet.create({

        /*AccessCODE*/
        codeFieldRoot: {marginTop: 60},
        cell: {
            marginLeft: 20,
            marginRight: 20,
            width: 40,
            height: 40,
            lineHeight: 38,
            fontSize: 24,
            borderWidth: 2,
            borderColor: '#00000030',
            textAlign: 'center',
        },
        focusCell: {
            borderColor: '#000',
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

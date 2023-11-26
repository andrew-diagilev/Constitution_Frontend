import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {commonStyles} from "../../assets/styles";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;
const NUM_FIELDS = 3;

export default function AccessCodeForm({onNext, result, setResult}) {
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
        <View style={[commonStyles.Container, commonStyles.ContainerRegCommon]}>
        <View style={{width: '100%', alignItems: 'center' }}>
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
                        <View key={index} onLayout={getCellOnLayoutHandler(index)}>
                            <Text  style={[styles.cell, isFocused && styles.focusCell]}>
                                {symbol || (isFocused ? <Cursor/> : null)}
                            </Text>
                        </View>
                    )}
                />
            ))}
            <TouchableOpacity style={styles.Button} onPress={onNext}>
                <Text style={styles.ButtonText}>Далі</Text>
            </TouchableOpacity>
        </View>
            </View>
    );
}

const styles = StyleSheet.create({
    /*AccessCODE*/
    codeFieldRoot: {marginTop: 50},
    cell: {
        marginLeft:15,
        marginRight: 15,
        width: 50,
        height: 50,
        lineHeight: 38,
        fontSize: 26,
        borderWidth: 2,
        borderColor: '#00000030',
        borderRadius: 10,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },

    Button: {
        marginTop:60,
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

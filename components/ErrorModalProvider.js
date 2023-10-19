import React, { createContext, useContext, useState } from 'react';
import {ErrorModal} from "./ErrorModal";

const ErrorModalContext = createContext();

export const ErrorModalProvider = ({ children }) => {
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorText, setErrorText] = useState('');

    const showErrorModal = (text) => {
        setErrorText(text);
        setErrorModalVisible(true);
    };

    const hideErrorModal = () => {
        setErrorModalVisible(false);
    };

    return (
        <ErrorModalContext.Provider value={{ showErrorModal, hideErrorModal }}>
            {children}
            <ErrorModal visible={errorModalVisible} errorMessage={errorText} onClose={hideErrorModal} />
        </ErrorModalContext.Provider>
    );
};

export const useErrorModal = () => {
    return useContext(ErrorModalContext);
};
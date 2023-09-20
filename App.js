import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './components/Navigator'
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './components/RootNavigator';
import Auth from "./views/Auth";
import {AuthProvider} from "./components/AuthContext";


export default function App() {

    return (<AuthProvider>
            <NavigationContainer ref={navigationRef}>
                <Navigator/>
            </NavigationContainer>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

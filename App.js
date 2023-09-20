import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './components/Navigator'
import {useFonts} from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './components/RootNavigator';
import Auth from "./views/Auth";
import {AuthProvider} from "./components/AuthContext";


export default function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    Philosopher: require('./assets/fonts/Philosopher-Regular.ttf'),
    PhilosopherBold: require('./assets/fonts/Philosopher-Bold.ttf'),
    PhilosopherItalic: require('./assets/fonts/Philosopher-Italic.ttf'),
  });

  if (!loaded) {
    return null; // Пока шрифты не загрузились, возвращаем пустой экран
  }
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
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

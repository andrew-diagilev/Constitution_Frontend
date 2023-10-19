import React from 'react';
import Navigator from './components/Navigator'
import {useFonts} from "expo-font";
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {navigationRef} from './components/RootNavigator';
import Menu from "./views/Menu";
import {RouteProvider, useRouteContext} from "./components/RootContext";
import {Provider} from "react-redux";
import { store, persistor } from './redux/store';
import {PersistGate} from "redux-persist/integration/react";
import {ErrorModalProvider} from "./components/ErrorModalProvider";

export default function App() {

  const [loaded] = useFonts({
    MarmeladRegular: require('./assets/fonts/Marmelad-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    Philosopher: require('./assets/fonts/Philosopher-Regular.ttf'),
    PhilosopherBold: require('./assets/fonts/Philosopher-Bold.ttf'),
    PhilosopherItalic: require('./assets/fonts/Philosopher-Italic.ttf'),
  });

  if (!loaded) {
    return null; // Пока шрифты не загрузились, возвращаем пустой экран
  }
    return (
        <Provider store={store}>
          <ErrorModalProvider>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={navigationRef}>
              <RouteProvider>
                <Navigator/>
               <Menu  navigation={navigationRef}/>
              </RouteProvider>
            </NavigationContainer>
          </PersistGate>
        </ErrorModalProvider>
        </Provider>
    );
}

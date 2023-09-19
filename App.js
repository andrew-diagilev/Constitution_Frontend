import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Navigator from './components/Navigator'
import {useFonts} from "expo-font";

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
  return (
      <Navigator/>
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

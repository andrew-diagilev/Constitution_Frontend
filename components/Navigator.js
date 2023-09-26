import NAV from '../views/NAV';
import Registration from '../views/Registration';
import Welcome from '../views/Welcome';
import React, {useContext} from "react";
import Main from '../views/Main';
import Profile from '../views/Profile';
import Abstracts from '../views/Abstracts';
import Lessons from '../views/Lessons';
import Lesson from '../views/Lesson';
import Tests from '../views/Tests';
import Abstract from '../views/Abstract';
import Test from '../views/Test';
import NewView2 from '../views/NewView2';
import Popup from './InfoModal';
import LessonsN from '../views/LessonsN';
import LessonsNN from '../views/LessonsNN';
import LessonN from '../views/LessonN';
import Auth from '../views/Auth';
import Menu from '../views/Menu';
import {useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigator from "./RootNavigator";
import {AuthContext} from './AuthContext';


const Stack = createNativeStackNavigator();

export default function Navigate() {
    const {isLoading, token} = useContext(AuthContext);

    if (isLoading) {
        return null
    }

    return (
            <Stack.Navigator screenOptions={{
                cardStyle: { backgroundColor: 'transparent', headerTransparent: true, },
                headerStyle: { backgroundColor: 'transparent', headerTransparent: true,},
                headerTitleStyle: {fontFamily:'Roboto', fontStyle:'italic', fontWeight: '900',fontSize: 24,},
                headerTintColor: '#00325B',
                headerBackTitle: 'Назад'
                ,
            }} >
                {token ? (<>
                <Stack.Screen name="NAV" component={NAV} options={{title: 'Головна Навігація', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="Registration" component={Registration} options={{title: 'Реєстрація', headerShown: true, headerTransparent: true, headerBackTitle: 'Назад',headerBackTitleVisible: false,}} />
                <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Привітання', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="Main" component={Main} options={{title: 'Головна', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="LessonsN" component={LessonsN} options={{title: 'УРОКИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="LessonsNN" component={LessonsNN} options={{title: 'УРОКИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Menu" component={Menu} options={{title: 'МЕНЮ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="LessonN" component={LessonN} options={{title: 'УРОК', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Lessons" component={Lessons} options={{title: 'УРОКИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Tests" component={Tests} options={{title: 'ТЕСТИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Profile" component={Profile} options={{title: 'ПРОФІЛЬ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Abstracts" component={Abstracts} options={{title: 'КОНСПЕКТИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Lesson" component={Lesson}/>
                <Stack.Screen name="Abstract" component={Abstract} options={{title: 'КОНСПЕКТ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Test" component={Test} options={{title: 'ТЕСТ', headerShown: true, headerTransparent: true}}/>
                {/*<Stack.Screen name="Popup" component={Popup} options={{title: 'ПОПАП', headerShown: true, headerTransparent: true}}/>*/}
                <Stack.Screen name="NewView2" component={NewView2} options={{headerShown: false}}/></>)
                :(<><Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
                    <Stack.Screen name="Main" component={Main}
                                  options={{headerShown: true, headerTransparent: true}}/></>)}
            </Stack.Navigator>
    );
}


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
import LessonsN from '../views/2';
import One from '../views/1';
import Auth from '../views/Auth';
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
            cardStyle: {backgroundColor: 'transparent', headerTransparent: true,}, // Установите прозрачный фон

            headerStyle: {backgroundColor: 'transparent'}, // Установите прозрачный фон для заголовков
            // Настройки цвета заголовков
        }}>
            {token ? (<>
                    <Stack.Screen name="Main" component={Main} options={{headerShown: true, headerTransparent: true}}/>
                    <Stack.Screen name="Lessons" component={Lessons}
                                  options={{headerShown: true, headerTransparent: true}}/>
                    <Stack.Screen name="Tests" component={Tests}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="Abstracts" component={Abstracts}/>
                    <Stack.Screen name="Lesson" component={Lesson}/>
                    <Stack.Screen name="Abstract" component={Abstract}/>
                    <Stack.Screen name="Test" component={Test}/>
                    <Stack.Screen name="One" component={One}/>
                    <Stack.Screen name="LessonsN" component={LessonsN}/>
                    <Stack.Screen name="NewView2" component={NewView2} options={{headerShown: false}}/></>)
                :
                (<><Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
                    <Stack.Screen name="Main" component={Main}
                                  options={{headerShown: true, headerTransparent: true}}/></>)}
        </Stack.Navigator>
    );
}


import Registration from '../views/Registration';
import Welcome from '../views/Welcome';
import React, {useEffect} from "react";
import Main from '../views/Main';
import Profile from '../views/Profile';
import Abstracts from '../views/Abstracts';
import Lessons from '../views/Lessons';
import Lesson from '../views/Lesson';
import Tests from '../views/Tests';
import Abstract from '../views/Abstract';
import Test from '../views/Test';
import Auth from '../views/Auth';
import {useNavigationState} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRouteContext} from "./RootContext";
import {isLoggedIn} from '../redux/authSelectors';
import {useSelector} from 'react-redux';
import FinalTest from "../views/FinalTest";

const Stack = createNativeStackNavigator();

export default function Navigate() {
    const isAuth = useSelector(isLoggedIn);
    const {updateCurrentRoute} = useRouteContext();

    // Используем useNavigationState для доступа к текущему маршруту
    const state = useNavigationState((state) => state);
    const currentRoute = state?.routes[state.index]?.name;

    useEffect(() => {
        // Обновляем текущий маршрут только если он изменился
        updateCurrentRoute(currentRoute);
    }, [currentRoute, updateCurrentRoute]);


    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {backgroundColor: 'transparent', headerTransparent: true,},
            headerStyle: {backgroundColor: 'transparent', headerTransparent: true,},
            headerTitleStyle: {fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '900', fontSize: 24,},
            headerTintColor: '#00325B',
            headerBackTitle: 'Назад'
            ,
        }}>
            {isAuth ? (<>
                    <Stack.Screen name="Main" component={Main} options={{title: 'ГОЛОВНЕ МЕНЮ', headerShown: true, headerTransparent: true}}/>
                    <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Привітання', headerShown: true, headerTransparent: true}}/>
                    <Stack.Screen name="Lessons" component={Lessons} options={{title: 'УРОКИ', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="Lesson" component={Lesson} options={{title: 'УРОК', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="Tests" component={Tests} options={{title: 'ТЕСТИ', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="Profile" component={Profile} options={{title: 'ПРОФІЛЬ', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="Abstracts" component={Abstracts} options={{title: 'КОНСПЕКТИ', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="Abstract" component={Abstract} options={{title: 'КОНСПЕКТ', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="Test" component={Test} options={{title: 'ТЕСТ', headerShown: false, headerTransparent: true}}/>
                    <Stack.Screen name="FinalTest" component={FinalTest} options={{title: 'ПІДСУМКОВИЙ ТЕСТ', headerShown: false, headerTransparent: true}}/>
                </>)
                : (<>
                    <Stack.Screen name="Registration" component={Registration}
                                  options={{title: 'Реєстрація', headerShown: true, headerTransparent: true, headerBackTitle: 'Назад', headerBackTitleVisible: false,}}/>
                    <Stack.Screen name="Auth" component={Auth}
                                  options={{title: 'Авторизація', headerShown: true, headerTransparent: true, headerBackTitle: 'Назад', headerBackTitleVisible: false,}}/>
                </>)}
        </Stack.Navigator>
    );
}


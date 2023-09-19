import React from "react";
import NAV from '../views/NAV';
import Registration from '../views/Registration';
import Welcome from '../views/Welcome';
import Main from '../views/Main';
import Profile from '../views/Profile';
import Abstracts from '../views/Abstracts';
import Lessons from '../views/Lessons';
import Lesson from '../views/Lesson';
import Tests from '../views/Tests';
import Abstract from '../views/Abstract';
import Test from '../views/Test';
import NewView2 from '../views/NewView2';
import Popup from '../views/popup';
import LessonsN from '../views/LessonsN';
import LessonN from '../views/LessonN';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                cardStyle: { backgroundColor: 'transparent', headerTransparent: true, },
                headerStyle: { backgroundColor: 'transparent', headerTransparent: true,},
                headerTitleStyle: {fontFamily:'Roboto', fontStyle:'italic', fontWeight: '900',fontSize: 24,},
                headerTintColor: '#00325B',

            }} >
                <Stack.Screen name="NAV" component={NAV} options={{title: 'Головна Навігація', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="Registration" component={Registration} options={{title: 'Реєстрація', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Привітання', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="Main" component={Main} options={{title: 'Головна', headerShown: true, headerTransparent: true}} />
                <Stack.Screen name="LessonsN" component={LessonsN} options={{title: 'УРОКИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="LessonN" component={LessonN} options={{title: '', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Lessons" component={Lessons} options={{title: 'УРОКИ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Tests" component={Tests}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Abstracts" component={Abstracts}/>
                <Stack.Screen name="Lesson" component={Lesson}/>
                <Stack.Screen name="Abstract" component={Abstract} options={{title: 'КОНСПЕКТ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Test" component={Test} options={{title: 'ТЕСТ', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Popup" component={Popup} options={{title: 'ПОПАП', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="NewView2" component={NewView2} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}


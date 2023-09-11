import React from "react";
import Main from '../views/Main';
import Profile from '../views/Profile';
import Abstracts from '../views/Abstracts';
import Lessons from '../views/Lessons';
import Lesson from '../views/Lesson';
import Tests from '../views/Tests';
import Abstract from '../views/Abstract';
import Test from '../views/Test';
import TabNavigation from "./TabNavigator";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function Navigate({navigation}) {


    return (
        <NavigationContainer>
            <Stack.Navigator  /*screenOptions={{headerShown: false}*/
                              initialRouteName={'Main'}>
              {/*<Stack.Screen name="TabNavigator" component={TabNavigation} />*/}
                <Stack.Screen name="Lessons" component={Lessons} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Abstracts" component={Abstracts} />
                <Stack.Screen name="Tests" component={Tests} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Lesson" component={Lesson}/>
                <Stack.Screen name="Abstract" component={Abstract}/>
                <Stack.Screen name="Test" component={Test}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
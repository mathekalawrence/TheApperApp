import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import Others from './screens/OtherScreen';
import HomeScreen from './app/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Welcome' 
            screenOptions={{
                headerStyle: {backgroundColor:'#6366f1'},
                headerTintColor: 'white',
                headerTitleStyle: {fontWeight: bold},
            }}
            >

                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Portfolio" component={PortfolioScreen} />
                <Stack.Screen name="Others" component={OtherScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen}  />
                

            </Stack.Navigator>

        </NavigationContainer>

    )
}
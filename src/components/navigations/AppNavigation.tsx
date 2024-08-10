import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer independent = {true}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Main'
            >
                <Stack.Screen name="Main" component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigation
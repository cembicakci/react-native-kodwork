import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../pages/Jobs';
import Detail from '../pages/Detail';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Jobs" component={Jobs} options={{ headerTintColor: '#ef5350' }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerTintColor: '#ef5350' }} />
        </Stack.Navigator>
    )
}

export default StackNavigation
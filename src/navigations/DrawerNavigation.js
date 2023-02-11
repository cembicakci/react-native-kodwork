import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import Favourite from '../pages/Favourite';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="StackNavigation" screenOptions={{ drawerActiveTintColor: '#ef5350' }}>
            <Drawer.Screen name="StackNavigation" component={StackNavigation} options={{ headerShown: false, title: 'Jobs' }} />
            <Drawer.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
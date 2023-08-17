import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './mainStackNavigatior';
import AboutStackNavigator from './aboutStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    title: 'Home',
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutStackNavigator}
                options={{
                    title: 'About',
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

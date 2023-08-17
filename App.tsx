import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './screens/home';
// import ReviewDetails from './screens/reviewDetails';
// import About from './screens/about';
import DrawerNavigator from './routes/drawerNavigatior';

import './assets/fonts/Nunito-Regular.ttf';
import './assets/fonts/Nunito-Bold.ttf';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <DrawerNavigator />
            {/* <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#eee' },
                    headerTintColor: '#444',
                }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'GameZone',
                    }}
                />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{ title: 'Review Details' }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ title: 'About' }}
                />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
}

export default App;

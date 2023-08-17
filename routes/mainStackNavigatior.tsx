import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    const header = (navigation: any) => (
        <View style={styles.header}>
            <Header navigation={navigation} title="GameZone" />
        </View>
    );

    return (
        <Stack.Navigator
            initialRouteName="GameZone"
            screenOptions={{
                headerStyle: { backgroundColor: '#eee' },
                headerTintColor: '#444',
            }}>
            <Stack.Screen
                name="GameZone"
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: () => header(navigation),
                })}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: 'Review Details' }}
            />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: '100%',
    },
});

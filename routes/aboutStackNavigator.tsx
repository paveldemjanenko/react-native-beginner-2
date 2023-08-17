import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

const AboutStackNavigator = () => {
    const header = (navigation: any) => (
        <View style={styles.header}>
            <Header navigation={navigation} title="About GameZone" />
        </View>
    );

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#eee' },
                headerTintColor: '#444',
            }}>
            <Stack.Screen
                name="About Gamezone"
                component={About}
                options={({ navigation }) => ({
                    headerTitle: () => header(navigation),
                })}
            />
        </Stack.Navigator>
    );
};

export default AboutStackNavigator;

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: '100%',
    },
});

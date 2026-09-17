import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Sportsgrene from './screens/Sportsgrene';
import CoachOversigt from './screens/Coachoversigt';
import CoachScreen from './screens/Coach';

import { Styles } from './styles/StylesSamlet';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Oversigt over Sportsgrene" component={Sportsgrene} />
                <Tab.Screen name="Oversigt over Coaches" component={CoachOversigt} />
                <Tab.Screen name="Coach" component={CoachScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

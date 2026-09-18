import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importere de forskellige filer, så vi kan gøre brug af variablene fra dem
import Sportsgrene from './screens/Sportsgrene';
import CoachOversigt from './screens/Coachoversigt';
import CoachScreen from './screens/Coach';

//Importere den globale styles fil, hvis den skal bruges senere hen
import { Styles } from './styles/StylesSamlet';


//Søgre for at skabe en "side navigator" i bunden af appen.
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*Søgre for at vi kan bruge de globale styles på denne side*/
import { StylesSamlet } from '../styles/StylesSamlet';

/*Eksportere CoachOversigt, så vi kan kalde på den i App.js*/
export default function CoachOversigt() {
  return (
    <View style={StylesSamlet.container}>
      <Text>Welcome to the 2 Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
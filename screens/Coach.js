import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*Søgre for at vi kan bruge de globale styles på denne side*/
import { StylesSamlet } from '../styles/StylesSamlet';

export default function CoachScreen() {
  return (
    <View style={StylesSamlet.container}>
      <Text>Welcome to the 3 Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

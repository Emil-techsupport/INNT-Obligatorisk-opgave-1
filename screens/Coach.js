import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*Søgre for at vi kan bruge de globale styles på denne side*/
import { StylesSamlet } from '../styles/StylesSamlet';

export default function CoachScreen() {
  return (
    //Gør brug af den globale styles fil
    <View style={StylesSamlet.container}>
      {/*Beskriver hvad planen er med siden*/}
      <Text>Her vil man kunne få info omkring den enkelte coach</Text>
      <StatusBar style="auto" />
    </View>
  );
}

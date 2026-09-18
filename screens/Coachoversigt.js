import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';

/*Søgre for at vi kan bruge de globale styles på denne side*/
import { StylesSamlet } from '../styles/StylesSamlet';




/*Eksportere CoachOversigt, så vi kan kalde på den i App.js*/
export default function CoachOversigt() {

  {/*Sætter en variable, der bruges længere nede*/}
  const [active, unActive] = useState(true)


  return (
    <View style={StylesSamlet.container}>
      {/*Beskriver bare lige hvad planen er med siden*/}
      <Text>Her vil man kunne se de tilgængelige coaches inden for hver sportsgren</Text>

      {/*Alt efter om variablen sat tidligere, er active eller unactive, så vil der blive skrevet noget forskelligt på siden*/}
      <Text>{active ? "Hold da op det er en god ide!" : "Der er pænt langt vej med koden..."}</Text>

      {/*Her har jeg taget inspiration fra øvelsesvejlederne i forhold til knappens kode*/}
      {/*Hver gang man trykker på knappen så vil den skifte mellem active og unactive */}
      <Button 
      title={"Positiv eller negativ?;)"} onPress={()=> unActive(!active)}
      />

      <StatusBar style="auto" />
    </View>
  );
}
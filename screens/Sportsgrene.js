import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

/*Søgre for at vi kan bruge de globale styles på denne side*/
import { StylesSamlet } from '../styles/StylesSamlet';

export default function Sportsgrene({navigation}) {

  // Her oprettes et array af forskellige sportsgrene, som senere skal bruges som data grundlag for listen
  const sportsgrene = [
    { navn: 'Crossfit', id: '1' },
    { navn: 'Løb', id: '2' },
    { navn: 'Svømning', id: '3' },
    { navn: 'Beachvolly', id: '4' },
    { navn: 'Cykling', id: '5' },
    { navn: 'Padel', id: '6' },
    { navn: 'Tennis', id: '7' },
  ];


  return (
    <View style={StylesSamlet.sportsgreneContainer}>
      <Text>Se alle sportsgrene her!:</Text>

      {/*Her laver jeg FlatList'en*/}
      <FlatList
        //Henter styling og liste med sportsgrene
        style={StylesSamlet.listenSelv}
        data={sportsgrene}

        //Fortæller hvad der skal vises på forsiden og hvordan
        renderItem={({ item: sportsgren }) => (
          <Text 
            style={StylesSamlet.itemSportsgren}> {sportsgren.navn}
          </Text>
        )}
        //Giver hver element i fra arrayet af sportsgrene et id.
        keyExtractor={sportsgren => sportsgren.id}
      />

      {/*Oprette en button, som sender en videre til næste side, når man trykker på den.*/}
      <Button
      title="Klik her for at se alle de tilgængelige coaches her"
      onPress={() => navigation.navigate('Oversigt over Coaches')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

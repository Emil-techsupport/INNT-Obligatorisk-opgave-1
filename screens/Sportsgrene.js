import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

/*Søgre for at vi kan bruge de globale styles på denne side*/
import { StylesSamlet } from '../styles/StylesSamlet';

export default function Sportsgrene() {

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
      <Text>Welcome to the 1 Screen</Text>
      <Text>Se alle sportsgrene her!:</Text>

      <FlatList
        style={StylesSamlet.listenSelv}
        data={sportsgrene}

        renderItem={({ item: sportsgren }) => (
          <Text 
            style={StylesSamlet.itemSportsgren}> {sportsgren.navn}
          </Text>
        )}

        keyExtractor={sportsgren => sportsgren.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

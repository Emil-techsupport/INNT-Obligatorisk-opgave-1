import { StyleSheet } from "react-native";

//Vi eksportere variablenStylesSamlet, således at den kan bruges på de andre sider.
export const StylesSamlet = StyleSheet.create({

    // Baggrund til mine forskellige sider
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Baggrund der kun hører til "Sportsgrene" siden
    sportsgreneContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Styling for hver individuel sportsgren på listen
    itemSportsgren: {
    backgroundColor: '#ee7e34',
    padding: 10,
    marginVertical: 6,
    width: '100%',
    },


});
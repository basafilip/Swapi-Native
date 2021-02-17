import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
      alignItems: "center"
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 300,
      height: 50,
      marginBottom: 10
    },
    characterScreenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
      alignItems: "center",
      backgroundColor: "black"
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto"
    },
    loader: {
      flex: 1, 
      justifyContent:"center", 
      alignItems: "center"
    },
    favorite: {
      fontSize: 17,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto",
      padding: 5
    },
    favoriteTitle: {
      fontSize: 25,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto"
    }
});

export default styles;


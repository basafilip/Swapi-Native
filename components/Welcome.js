import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AppButton from '../style/AppButton';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground source={require('../images/star-wars-background.jpg')} style={{flex: 1, resizeMode: 'cover'}}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppButton title="List of all Characters"
        onPress={() =>
          navigation.navigate('Lista')
        }
      />
        <AppButton title="Favorite Characters"
          onPress={() =>
            navigation.navigate('Favorite')
          }
        />
      </View>
    </ImageBackground>
  );
}

export default Welcome;

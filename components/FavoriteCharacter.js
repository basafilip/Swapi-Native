import React, {Component} from "react";
import {Text, View, Button} from "react-native";
import styles from '../style/styles';

export default function FavoriteCharacter() {
    /* 2. Get the param */
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Favorite Characters</Text>
        <Text>Name: </Text>
        <Text>Height: </Text>
      </View>
    );
  }
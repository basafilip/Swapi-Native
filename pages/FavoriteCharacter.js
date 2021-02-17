import React from "react";
import {Text, View, ImageBackground} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import StarWarsBg from "../images/star-wars-background.jpg";
import styles from '../style/styles';

export default function FavoriteCharacter() {
    const favorites = useSelector(state => state.favorites);

    return (
    <ImageBackground
      source={StarWarsBg}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <Text style={styles.favoriteTitle}>Favorite Characters</Text>
          {favorites && favorites.map((character, index) => (
            <Text key={index} style={styles.favorite} >
              {character.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
    )
}

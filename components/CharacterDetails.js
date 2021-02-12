import React, {Component, useState, memo} from "react";
import {Text, View, Button, ImageBackground} from "react-native";
import styles from '../style/styles';
import { AsyncStorage } from "@react-native-community/async-storage";
import { useEffect } from "react";
import FavoriteCharacter from './FavoriteCharacter'

export default function CharacterDetails ({route,navigation}) {        
    /* 2. Get the param */
    const { itemId, height, starships, mass } = route.params;
    const [favorites,setFavorites] = useState(favorites);
    console.log(favorites);
    
    return (
    <ImageBackground source={require('../images/star-wars-background.jpg')} style={{flex: 1, resizeMode: 'cover'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Character Details</Text>
        <Text style={{color: "#fff"}}>Name: {itemId}</Text>
        <Text style={{color: "#fff"}}>Height: {height}</Text>
        <Text style={{color: "#fff"}}>Mass: {mass}</Text>
        <Button title='Add to Favorites' onPress={() => setFavorites([itemId])}></Button>
        <Text style={{color: "#fff"}}>{favorites}</Text>
      </View>
      
    </ImageBackground>
    );
  }
  

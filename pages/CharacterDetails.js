import React, {useState, useEffect} from "react";
import { Text, View, ImageBackground } from "react-native";
import {useDispatch} from 'react-redux';
import {addFavorite} from '../redux/favoritesSlice';
import StarWarsBg from "../images/star-wars-background.jpg";
import AppButton from '../components/AppButton';
import styles from '../style/styles';

export default function CharacterDetails({ route }) {
  const { name, height, gender, mass, homeworld } = route.params; 
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('Add to favorites')
  let url = homeworld;

  useEffect(() => {
    if(url != '') {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json.name))
        .catch((error) => console.error(error))
    } else {
      setData('None')
    }
  }, []);

  const functionOne = () => (
    dispatch(addFavorite({name}))
  )

  const functionTwo = () => (
    setTitle('Added to favorites')
  )

  const functionCombined = () => (
    functionOne(),
    functionTwo()
  )

  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={StarWarsBg}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View style={styles.loader}>
        <Text>Character Details</Text>
        <Text style={styles.appButtonText}>Name: {name}</Text>
        <Text style={styles.appButtonText}>Height: {height}</Text>
        <Text style={styles.appButtonText}>Gender: {gender}</Text>
        <Text style={styles.appButtonText}>Mass: {mass}</Text>
        <Text style={styles.appButtonText}>Homeworld: {data}</Text>
        <AppButton title={title} onPress={() => functionCombined()} />
      </View>
    </ImageBackground>
  );
}

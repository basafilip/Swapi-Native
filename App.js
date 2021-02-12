import CharacterList from './components/CharacterList';
import FavoriteCharacter from './components/FavoriteCharacter';
import Welcome from './components/Welcome';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterDetails from './components/CharacterDetails';

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Lista" component={CharacterList}/>
        <Stack.Screen name="Favorite" component={FavoriteCharacter}/>
        <Stack.Screen name="Details" component={CharacterDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default YourApp;

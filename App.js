import CharacterList from './pages/CharacterList';
import FavoriteCharacter from './pages/FavoriteCharacter';
import Welcome from './pages/Welcome';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterDetails from './pages/CharacterDetails';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} options={{ title: 'Welcome' }} />
        <Stack.Screen name="List" component={CharacterList} options={{ title: 'List of Characters' }} />
        <Stack.Screen name="Favorite" component={FavoriteCharacter} options={{ title: 'Favorite Characters' }} />
        <Stack.Screen name="Details" component={CharacterDetails} options={{ title: 'Character Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default YourApp;

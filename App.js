import CharacterList from './pages/CharacterList';
import FavoriteCharacter from './pages/FavoriteCharacter';
import Welcome from './pages/Welcome';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterDetails from './pages/CharacterDetails';
import {Provider, createStore} from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default YourApp;

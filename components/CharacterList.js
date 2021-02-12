import React, { Component } from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../style/styles';
import AppButton from '../style/AppButton';

export default class CharacterList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true
      };
    }

    async getData() {
        const results =  [];
        let url = 'https://swapi.dev/api/people/';

        do {
            const res = await fetch(url);
            const data = await res.json()
            url = data.next;
            results.push(...data.results);
        } while(url)
        
        this.setState({ data: results})
    }
  
    async componentDidMount() {
        await this.getData();
        console.log(this.state.data)  
    }
  
    render() {
      const { navigation } = this.props;

      return (
        <ScrollView >
          <View style={styles.characterScreenContainer}>
            {this.state.data.map(item => (
                <View key={item.name}><AppButton onPress={() => {this.props.navigation.navigate(
                  'Details', {
                  itemId: item.name, 
                  height: item.height,
                  starships: item.starships,
                  mass: item.mass
                })}} title={item.name} backgroundColor="#007bff" /></View>
            ))}
        </View>
        </ScrollView>
      ); 
    }
  };

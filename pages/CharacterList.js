import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import styles from "../style/styles";
import AppButton from "../components/AppButton";

export default class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true, 
    };
  }

  async getData() {
    const results = [];
    let url = "https://swapi.dev/api/people/";

    try {
      do {
        const res = await fetch(url);
        const data = await res.json();
        url = data.next;
        results.push(...data.results);
      } while (url);
      this.setState({ data: results, isLoading: false }); 
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getData(); 
  }

  render() {
    const { navigation } = this.props;

    if(this.state.isLoading === true) {
      return(
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    } else {
      return (
        <ScrollView>
          <View style={styles.characterScreenContainer}>
            {this.state.data.map((item) => (
              <View key={item.name}>
                <AppButton
                  onPress={() => {this.props.navigation.navigate(
                    'Details', {
                    name: item.name,
                    height: item.height,
                    gender: item.gender,
                    mass: item.mass,
                    homeworld: item.homeworld
                  })}}
                  title={item.name} 
                />
              </View>
            ))}
          </View>
        </ScrollView>
      );
    }
  }
}
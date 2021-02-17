import React from 'react';
import {View, ImageBackground} from 'react-native';
import AppButton from '../components/AppButton';
import StarWarsBg from "../images/star-wars-background.jpg";

const Welcome = ({navigation}) => {

	return (
		<ImageBackground
			source={StarWarsBg}
			style={{flex: 1, resizeMode: 'cover'}}
		>
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<AppButton
					title="List of all Characters"
					onPress={() =>
            navigation.navigate('List')
          }  
				/>
				<AppButton
					title="Favorite Characters" 
					onPress={() =>
            navigation.navigate('Favorite')
          } 
				/>
			</View>
		</ImageBackground>
	);

};

export default Welcome;


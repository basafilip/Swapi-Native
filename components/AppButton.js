import {TouchableOpacity, Text} from 'react-native';
import styles from '../style/styles';
import React from 'react';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

export default AppButton;

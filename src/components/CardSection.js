import React from 'react';
import { View } from 'react-native';

import color from '../constant/color.json';

const CardSection = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: color.white,
    postion: 'relative'
  }
};

export default CardSection;

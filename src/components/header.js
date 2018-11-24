import React from 'react';
import { Text, View } from 'react-native';

import color from '../constant/color.json';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: color.red,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    position: 'relative',
    // ios
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // android
    elevation: 2
  },
  textStyle: {
    fontSize: 20,
    color: color.white,
    fontWeight: 'bold'
  }
};

export default Header;

import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

import color from '../constant/color.json';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { headerContentStyle, textStyle, thumbnailStyle} = styles

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={textStyle}>{title}</Text>
          <Text style={textStyle}>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    color: color.text
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;

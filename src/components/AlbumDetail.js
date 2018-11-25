import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import color from '../constant/color.json';
import text from '../constant/text.json';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerContentStyle,
    firstHeaderTextStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={firstHeaderTextStyle}>{title}</Text>
          <Text style={headerTextStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          {text.buy_btn}
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  firstHeaderTextStyle: {
    color: color.text,
    fontSize: 18
  },
  headerTextStyle: {
    color: color.text
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;

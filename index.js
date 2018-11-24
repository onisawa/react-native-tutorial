import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import text from './src/constant/text.json';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={text.album_list_header} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albumsExample', () => App);

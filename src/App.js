import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './components/common/Header';
import AlbumList from './components/AlbumList';
import text from './constant/text.json';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={text.album_list_header} />
        <AlbumList />
      </View>
    );
  }
}

export default App;

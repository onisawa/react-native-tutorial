import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';

import { Header } from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';
import text from './constant/text.json';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEb1nW40ct_YWqdZgJD-eGdOOwd2oQ6m4',
      authDomain: 'dev-big-lab.firebaseapp.com',
      databaseURL: 'https://dev-big-lab.firebaseio.com',
      projectId: 'dev-big-lab',
      storageBucket: 'dev-big-lab.appspot.com',
      messagingSenderId: '809693940871'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={text.album_list_header} />
        <LoginForm />
        <AlbumList />
      </View>
    );
  }
}

export default App;

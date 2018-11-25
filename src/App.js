import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import { Header, Spinner, Button, CardSection, Card } from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';
import text from './constant/text.json';

class App extends Component {
  state = { isLoggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEb1nW40ct_YWqdZgJD-eGdOOwd2oQ6m4',
      authDomain: 'dev-big-lab.firebaseapp.com',
      databaseURL: 'https://dev-big-lab.firebaseio.com',
      projectId: 'dev-big-lab',
      storageBucket: 'dev-big-lab.appspot.com',
      messagingSenderId: '809693940871'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <View style={{ flex: 1 }}>
            <Card>
              <CardSection>
                <Button
                  onPress={() => firebase.auth().signOut()}
                >
                  {text.logout}
                </Button>
              </CardSection>
            </Card>
            <AlbumList />
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={text.album_list_header} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

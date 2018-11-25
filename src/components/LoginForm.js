import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'

import text from '../constant/text.json';
import color from '../constant/color.json';

import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', isLoading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', isLoading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))  
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      isLoading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      isLoading: false,
      error: 'Authentication Failed.'
    });
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        {text.login}
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={text.email}
            placeholder={'email@domain.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
          
        <CardSection>
          <Input 
            label={text.password}
            placeholder={text.password}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            isSecure
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: color.error_text
  }
};

export default LoginForm;

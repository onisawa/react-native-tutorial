import React, { Component } from 'react';
import { View } from 'react-native';

import text from '../constant/text.json';

import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
          <Button>
            {text.login}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

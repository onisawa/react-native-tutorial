import React, { Component } from 'react';

import text from '../constant/text.json';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={text.email}
            placeholder={'email@domain.com'}
            value={this.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

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

import React, { Component } from 'react';
import Stock from './screens/stock';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Stock />
      </Container>
    );
  }
}

export default App;

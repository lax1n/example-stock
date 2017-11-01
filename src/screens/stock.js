import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Query from '../components/Query';


class Stock extends Component {
  render() {
    return (
			<Grid divided padded stretched>
				<Grid.Column width={4}>
					<Header as='h1'>Query interface</Header>
					<Query />
				</Grid.Column>
				<Grid.Column width={8}>
					<Header as='h1'>Data visualizer</Header>
				</Grid.Column>
			</Grid>
    );
  }
}

export default Stock;

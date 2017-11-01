import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { getAllOrgUnits } from '../actions/orgUnits';

class Query extends Component {
	constructor(props){
		super(props);

		this.state = {
			orgUnits: [],
		}
	}
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]
	componentDidMount(){
		// Load organization units
		getAllOrgUnits().then((orgUnits) => {
			let preparedOrgUnits = [];
			orgUnits.forEach((orgUnit) => {
				preparedOrgUnits.push({key: orgUnit.id, value: orgUnit.id, text: orgUnit.displayName});
			});
			this.setState({orgUnits: preparedOrgUnits});
			console.log(orgUnits);
		}).catch((e) => {
			console.log('Error while loading ', e.message);
		});
	}

  render() {
    return (
			<Dropdown
				placeholder='Select org units'
				fluid
				multiple
				search
				selection
				options={this.state.orgUnits}
			/>
    );
  }
}

export default Query;

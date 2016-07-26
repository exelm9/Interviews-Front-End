import React, { Component } from 'react';
import FilterButton from "./FilterButton"
import _ from 'lodash';

class SearchFilter extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeFilter: null,
			filters:["boarding","sitting"]
		};
	}
	render(){
		let filterBtns = _.map(this.state.filters, (filter, index) => {
			return (
				<FilterButton
					name={ filter }
					key={ "filterBtn" + index }
				/>
			);
		});

	  return (
	    <div className="searchFilter" onClick={this.props.filterClick}>
	    	{ filterBtns }
	    </div>
	  );
	}
};

export default SearchFilter
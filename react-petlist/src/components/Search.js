import React, { Component } from 'react';
import SearchFilter from "./SearchFilter";
import SearchItem from "./SearchItem";
import * as serverAPI from "../lib/server-api.js";
import {formatFullName, truncateDescription} from "../lib/utility.js";
import _ from 'lodash';

export default class Search extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	 results: []
  	};
    this.filterClick = this.filterClick.bind(this);
  }

  componentDidMount() {
    serverAPI.search(null, (response) => {
      let data = response.data.search;
      this.setState({ results: data });
    })
  }

  filterClick(event) {
    if(event.target.value === "boarding"){
      serverAPI.searchBoarding(null, (response) => {
        let data = response.data.search;
        this.setState({ results: data });
      })
    }else if(event.target.value === "sitting"){
      serverAPI.searchSitting(null, (response) => {
        let data = response.data.search;
        this.setState({ results: data });
      })
    }
  }

  render() {
    let searchItems = _.map(this.state.results, (result, index) => {
    let fullName = formatFullName(result.user);
    let description = truncateDescription(result.description);

      return (
        <SearchItem
          fullName={ fullName }
          title={ result.title }
          description={ description }
          petName={ result.pet.name }
          key={ "searchItem" + index }
        />
      );
    });

    return (
      <div>
        <SearchFilter filterClick={this.filterClick}/>
        { searchItems }
      </div>
    );
  }
}
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
  }

  componentDidMount() {
    serverAPI.search(null, (response) => {
      let data = response.data.search;
      this.setState({ results: data });
    })
  }

  render() {
    let searchItems = _.map(this.state.results, (result, index) => {
    let fullName = formatFullName(result.user);
    console.log(result,'wtf')

      return (
        <SearchItem
          fullName={ fullName }
          title={ result.title }
          description={ result.description }
          petName={ result.pet.name }
          key={ "searchItem" + index }
        />
      );
    });

    return (
      <div>
        <SearchFilter/>
        { searchItems }
      </div>
    );
  }
}
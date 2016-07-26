import React, { Component } from 'react';
import * as serverAPI from "../lib/server-api.js";
import SearchFilter from "./SearchFilter";
import SearchItem from "./SearchItem";
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
    let searchItems = _.map(this.state.results, (result) => {

      return (
        <SearchItem
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
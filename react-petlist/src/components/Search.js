import React, { Component } from 'react';
import * as serverAPI from "../lib/server-api.js";

export default class Search extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	 results: []
  	};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
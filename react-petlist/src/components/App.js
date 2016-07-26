// This component handles the App template used on every page.
import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
  const { children } = this.props;
    return (
        <div className="stage">
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
// This component handles the App template used on every page.
import React, { Component } from 'react';

class App extends Component {
  render() {
  	const { children } = this.props
    return (
   		<div className="stage">
      	{this.props.children}
      </div>
    )
  }
}

export default App;
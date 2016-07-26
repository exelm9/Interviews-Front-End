import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from '../routes.js';

const dest = document.getElementById('content');

ReactDOM.render(
	<Router history={ browserHistory } routes={ routes } />,
  dest
);

window.React = React; // enable debugger

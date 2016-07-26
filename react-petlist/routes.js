import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './src/components/App';
import Search from './src/components/Search';

export default(
	<Route path="/" component={ App }>
		<IndexRoute component={ Search }/>
	</Route>
);
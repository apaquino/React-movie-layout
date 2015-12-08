import React, {Component} from 'react';
import Header from './header.js';
import Poster from './poster.js';
import List from './list.js';

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<List source="http://api.themoviedb.org/3/discover/movie?api_key=9e1b08f9af16f8d7c20c0dd0aeb4749a&year=2015&sort_by=revenue.desc"/>
			</div>
			)
	}
}

export default App;

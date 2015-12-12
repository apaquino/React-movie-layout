import React, {Component} from 'react';
import Header from './header.js';
import Poster from './poster.js';
import List from './list.js';
import {get} from 'jquery';

const SOURCE = `http://api.themoviedb.org/3/discover/movie?api_key=${PROVIDE_KEY}&year=2015&sort_by=revenue.desc`;

class App extends Component {
	constructor (props) {
		super(props)
		this.state = { data: [] }
	}

	loadMovies () {
		get(SOURCE)
			.success(data => this.setState({ data: data['results'] }))
			.error(err => console.error(this.props.source, err.toString()))
	}

	componentDidMount () {
		this.loadMovies()
	}

	render() {
		return (
			<div>
				<Header/>
				<List data={this.state.data} />
			</div>
			)
	}
}

export default App;

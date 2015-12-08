import React, {Component} from 'react';
import Header from './header.js';
import Poster from './poster.js';
import List from './list.js';

const SOURCE = "http://api.themoviedb.org/3/discover/movie?api_key=9e1b08f9af16f8d7c20c0dd0aeb4749a&year=2015&sort_by=revenue.desc";

class App extends Component {
	constructor (props) {
		super(props)
		this.state = { data: [] }
	}

	loadMovies () {
		fetch(SOURCE)
			.then(response => response.json())
			.then(data => this.setState({ data: data['results'] }))
			.catch(err => console.error(this.props.source, err.toString()))
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

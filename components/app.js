import React, {Component} from 'react';
import Header from './header.js';
import Poster from './poster.js';

class App extends Component {
	
	render() {
		return (
			<div>
			<Header/>
				{[...Array(20)].map((x, i) =>
    			<Poster key={i + 1} />
  				)}
			</div>
			)
	}
}

export default App;

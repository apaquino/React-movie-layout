import React from 'react';
import Poster from './poster.js';

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
  }

  loadMovies () {
  fetch(this.props.source)
    .then(response => response.json())
    .then(data => this.setState({ data: data['results'] }))
    .catch(err => console.error(this.props.source, err.toString()))
  }

  componentDidMount () {
    this.loadMovies()
  }

	render() {
    let posts = this.state.data.map(function(movie){
      return <Poster movie={movie} />
    });

    return (
      <div>{posts}</div>
    )
	}
}

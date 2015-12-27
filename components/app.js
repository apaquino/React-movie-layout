import React, { Component } from 'react';
import Header from './header.js';
import Poster from './poster.js';
import List from './list.js';
import MovieActions from "../actions/MovieActions";
import MovieStore from "../stores/MovieStore";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { movies: this._getMoviesState() };
  }

  componentDidMount () {
    MovieActions.retrieveMovies();
    MovieStore.startListening(this._onFluxChange.bind(this));
  }

  componentWillUnmount() {
    MovieStore.stopListening(this._onFluxChange.bind(this));
  }

  _onFluxChange() {
    this.setState({movies: this._getMoviesState()});
  }

  _getMoviesState() {
    return MovieStore.getMovies();
  }

  render() {
    return (
      <div>
        <Header/>
        <List data={this.state.movies} />
      </div>
    )
  }
}

export default App;

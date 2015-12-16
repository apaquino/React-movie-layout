import React, {Component} from 'react';
import Header from './header.js';
import Poster from './poster.js';
import List from './list.js';

import MovieActions from "../actions/MovieActions";
import MovieStore from "../stores/MovieStore";
// 9. import react-redux and actions and bindActionCreators
import{connect} from 'react-redux';
import * as movieActions from '../actions/reduxActions';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.actions.fetchMovies();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <List data={this.props.movies} />
      </div>
    )
  }
}

// 10. create function to map state to props

function mapStateToProps(state) {
  const {movies, isLoading} = state.movies;
  return {
    isLoading,
    movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

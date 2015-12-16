import React, {Component} from 'react';
import Header from '../components/header.js';
import Poster from '../components/poster.js';
import List from '../components/list.js';

// 9. import react-redux and actions and bindActionCreators
import{connect} from 'react-redux';
import * as movieActions from '../actions/reduxActions';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor (props) {
    super(props);
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

// 11. use connect function so you don't have to subscribe, unsubscribe, and
// other boilerplate code

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

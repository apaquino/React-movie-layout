import {REQUEST_MOVIES, RECEIVE_MOVIES} from '../actions/reduxActions';

// 4. create function of the state with applicable actions on it
// accepts state (with default) and action and inside a switch case

const initialState = {
  isLoading: false,
  movies:[]
};

function movies(state = initialState, action) {
  switch (action.type) {
  case REQUEST_MOVIES:
    return Object.assign({}, state, {
      isLoading: true
    });
  case RECEIVE_MOVIES:
    return Object.assign({}, state, {
      isLoading: false,
      movies: action.movies
    });
  default:
    return state;
  }
}

export default movies;

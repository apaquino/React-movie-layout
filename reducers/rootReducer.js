import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorReducer';

// 5. create root reducers of all reducers.
//    this is your state tree

const rootReducer = combineReducers({
  movies,
  actors
});

export default rootReducer;

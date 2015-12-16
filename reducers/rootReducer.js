import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorReducer';

// 5. create root reducers of all reducers if more than one.  even if just one  .

const rootReducer = combineReducers({
  movies,
  actors
});

export default rootReducer;

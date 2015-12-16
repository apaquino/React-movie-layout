import {combineReducers} from 'redux';
import movies from './movieReducer';

// 5. create root reducers of all reducers if more than one.  even if just one  .

const rootReducer = combineReducers({
  movies
});

export default rootReducer;

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

// 6. this has middle ware for the async functions
// need to have a function that calls a curry function
// you will call a function and then create a store
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

// 7. create a function that creates the store and returns it
// initialState is a pattern just in case it is brought in from the server
function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

export default configureStore;

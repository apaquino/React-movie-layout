import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {Provider} from 'react-redux';
import configureStore from './stores/reduxConfigureStore';

// 8. create a store, wrap container component provider HOC, assign store prop

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);

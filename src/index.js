import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import App from './App';
import './index.css';
import combineReducers from './reducers';

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
store.dispatch({ type: 'ADD_PLAYLIST', payload: 'One two three' });

const weather = {
  cityid: 728732,
  clouds: 0.07,
  wind: 3
};

store.dispatch({ type: 'ADD_WEATHER', payload: weather });

ReactDOM.render(
<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

import combineReducers from './reducers';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
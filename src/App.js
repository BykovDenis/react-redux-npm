import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getDataWeather } from './actions/weather';


class App extends Component {
  render() {
    return (
      <div>
      <input type="button" value="get data" onClick={this.props.getWeather} />
  </div>
  );
  }
}

export default connect(
  state => ({
    currentStore: state
  }),
  dispatch => ({
    getWeather: () => {
      dispatch(getDataWeather());
    }
  })
)(App);


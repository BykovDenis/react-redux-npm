import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const currentStore = this.props.currentStore;
    return (
      <div>
      {currentStore.weather[0].cityid}
      </div>
  );
  }
}

export default connect(
  state => ({
    currentStore: state
  }),
  dispatch => ({})
)(App);
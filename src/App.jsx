import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import Landing from './Landing'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Landing/>
        </div>
      </MuiThemeProvider>
    );
  }
}

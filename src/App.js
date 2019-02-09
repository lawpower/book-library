import React, { Component } from 'react';
import './App.scss';
import Masthead from './Masthead/Masthead';
import Library from './Library/Library';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='app-wrapper'>
          <Masthead />
          <Library />
        </div>
      </div>
    );
  }
}

export default App;
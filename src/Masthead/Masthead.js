import React, { Component } from 'react';
import './Masthead.scss';
import Search from './Search';

class Masthead extends Component {
  render() {
    return (
      <header className='masthead' role='banner'>
        <h1>My Library</h1>
        <Search />
      </header>
    );
  }
}

export default Masthead;
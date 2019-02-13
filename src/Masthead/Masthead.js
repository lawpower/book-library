import React, { Component } from 'react';
import './Masthead.scss';

class Masthead extends Component {
  render() {
    return (
      <header className='masthead' role='banner'>
        <h1>My Library</h1>
        <button className='library-add' onClick={ () => this.props.addBook() }>
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path className="add-button-background" fill="#004AAE" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>                  
          </i>
          <span>Add Book</span>
        </button>

      </header>
    );
  }
}

export default Masthead;
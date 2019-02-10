import React, { Component } from 'react';
import './Library.scss';
import Book from './Book';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    };
  }

  componentWillMount() {
    this.getBooks();
  }

  render() {
    return this.state.books.length > 0 ?
      (
      <main className='library'>
        <p className='library-meta'>
          <span>{ this.state.books.length } Books</span>
          <button className='library-add'>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#004BAF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>                  
            </i>
            <span>Add Book</span>
          </button>
        </p>
        <ul className='library-books'>
          { this.state.books.map((book, i) => {
              return <Book 
                key={ i }
                title={ book.title } 
                author={ book.author }  
                description={ book.description } 
                thumbnail={ book.thumbnail } />
            })
          }
        </ul>
      </main>
    ) : (
      <main className='library'>
        { this.state.isLoaded ?
          <p className='library-empty'>You don't have any books</p>
          :
          <p className='library-loading'>Loading...</p>
        }
      </main>
    );
  }

  getBooks() {
    fetch('http://localhost:3000/books')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ books: json })
      })
  }  
}

export default Library;
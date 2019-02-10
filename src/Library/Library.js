import React, { Component } from 'react';
import './Library.scss';
import Book from './Book';

class Library extends Component {
  render() {
    return this.props.books.length > 0 ?
      (
      <main className='library'>
        { this.props.searchQuery.length > 0 ?
          <p className='library-meta'>
            <span>{ this.props.books.length } Books for the search term '{ this.props.searchQuery }'</span>
            <button className='library-add'>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path className="add-button-background" fill="#004AAE" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>                  
              </i>
              <span>Add Book</span>
            </button>
          </p>
          :
          <p className='library-meta'>
            <span>{ this.props.books.length } Books</span>
            <button className='library-add'>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path className="add-button-background" fill="#004AAE" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>                  
              </i>
              <span>Add Book</span>
            </button>
          </p>
        }
        <ul className='library-books'>
          { this.props.books.map((book, i) => {
              return <Book 
                key={ i }
                id={ book.id }
                title={ book.title } 
                author={ book.author }  
                description={ book.description } 
                thumbnail={ book.thumbnail }
                deleteBook={ () => this.props.deleteBook(book.id) }/>
            })
          }
        </ul>
      </main>
    ) : (
      <main className='library'>
        { this.props.searchQuery.length > 0 ?
          <p className='library-empty'>Sorry, no books found matching '{ this.props.searchQuery }'</p>
          :
          <p className='library-empty'>You don't have any books</p>
        }
      </main>
    );
  }
}

export default Library;
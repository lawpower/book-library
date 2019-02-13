import React, { Component } from 'react';
import './Library.scss';
import LibraryBook from './LibraryBook';
import Search from '../Search/Search';

class Library extends Component {
  render() {
    return (
      <main className='library'>
        <div className='library-subheader'>
          <div className='library-status'>
            <h2>All Books</h2>
            { this.props.searchQuery.length > 0 ?
              <span>{ this.props.books.length } Books for the search term '{ this.props.searchQuery }'</span>
              :
              <span>{ this.props.books.length } Books</span>
            }
          </div>
          <div className='library-search'>
            <Search 
              onSearchChanged={ (query) => this.props.onSearchChanged(query) }
              searchQuery={ this.props.searchQuery }
            />
          </div>
        </div>
        <ul className='library-books'>
          { this.props.books.map((book, i) => {
              return <LibraryBook 
                key={ i }
                book={ book }
                editBook={ () => this.props.editBook(book) }
                loanBook={ () => this.props.loanBook(book) }
                returnBook={ () => this.props.returnBook(book) }
                onSaveChanges={ () => this.props.editBook(book) }
                deleteBook={ () => this.props.deleteBook(book) }/>
            })
          }
        </ul>
      </main>
    );
  }
}

export default Library;
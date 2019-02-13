import React, { Component } from 'react';
import './Library.scss';
import Book from './Book';
import Search from '../Search/Search';

class Library extends Component {
  render() {
    return (
      <main className='library'>
        <p className='library-meta'>
          <div className='library-status'>
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
        </p>
        <ul className='library-books'>
          { this.props.books.map((book, i) => {
              return <Book 
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
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './LibraryBook.scss';

class LibraryBook extends Component {
  render() {
    const book = this.props.book;
    return (
      <li className='library-book'>
        <img src={ book.thumbnail } alt={ book.title } className='library-book-thumbnail' />
        <div className='library-book-name'>
          <h2 className='library-book-title'>
            { book.title }
          </h2>
          <p className='library-book-author'>by { book.author }</p>
          <p className='library-book-action'>
            <Link to={`book/${ book.id}`}>
              <span>Book Details</span>
            </Link>
          </p>
        </div>
        <div className='library-book-details'>
          <p className='library-book-description'>{ book.description }</p>
        </div>
      </li>
    );
  }
}

export default LibraryBook;
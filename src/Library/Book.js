import React, { Component } from 'react';
import './Book.scss';

class Book extends Component {
  render() {
    const book = this.props.book;
    return (
      <li className='book'>
        <img src={ book.thumbnail } alt={ book.title } className='book-thumbnail' />
        <div className='book-name'>
          <h2 className='book-title'>{ book.title }</h2>
          <p className='book-author'>by { book.author }</p>
          { book.loanedTo &&
            <p className='book-loaned'>Loaned to { book.loanedTo }</p>
          }
        </div>
        <div className='book-details'>
          <p className='book-description'>{ book.description }</p>
          <ul className='book-actions'>
            <li className='book-action'>
            <button className='action' onClick={ () => this.props.editBook() }>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#004AAE" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                </i>
                <span>Edit</span>
              </button>
            </li>
            <li className='book-action'>
             { !book.loanedTo ?
              <button className='action' onClick={ () => this.props.loanBook() }>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#004AAE" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                </i>
                  <span>Loan</span>
              </button>
              :
              <button className='action' onClick={ () => this.props.returnBook() } title={ `Loaned to ${ book.loanedTo }` }>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#004AAE" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                </i>
                  <span>Return</span>
              </button>

             }
            </li>
            <li className='book-action'>
              <button className='action' onClick={ () => this.props.deleteBook() }>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#004AAE" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                </i>
                <span>Delete</span>
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default Book;
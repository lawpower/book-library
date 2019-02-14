import React, { Component } from 'react';
import './BookDetail.scss';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentWillMount() {
    this.getBook(this.props.bookId);
  }

  render() {
    const book = this.state.book;
    if(!book) {
      return null;
    }

    return (
      <main className='book-detail'>
        <div className='book-detail-subheader'>
          <div className='book-detail-status'>
            <h2>{ book.title }</h2>
            <span>by { book.author }</span>
          </div>
          <ul className='book-detail-actions'>
              <li className='book-detail-action'>
                <button className='action' onClick={ () => this.props.editBook(book) }>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path className='background' fill="#004AAE" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                  </i>
                  <span>Edit</span>
                </button>
              </li>
              <li className='book-detail-action'>
              { !book.loanedTo ?
                <button className='action' onClick={ () => this.props.loanBook(book) }>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path className='background' fill="#004AAE" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                  </i>
                    <span>Loan</span>
                </button>
                :
                <button className='action' onClick={ () => this.props.returnBook(book) } title={ `Loaned to ${ book.loanedTo }` }>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path className='background' fill="#004AAE" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                  </i>
                    <span>Return</span>
                </button>

              }
              </li>
              <li className='book-detail-action'>
                <button className='action' onClick={ () => this.props.deleteBook(book) }>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#004AAE" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                          
                  </i>
                  <span>Delete</span>
                </button>
              </li>
            </ul>

        </div>
        <div className='book-detail-content'>
          <img src={ book.thumbnail } alt={ book.title } className='book-detail-thumbnail' />
          <div className='book-detail-details'>
            <p className='book-detail-description' title={ book.description }>{ book.description }</p>
            { book.loanedTo &&
            <p className='book-detail-loaned'>
              Loaned to { book.loanedTo }
            </p>
            }
          </div>
        </div>
      </main>
    );
  }

  getBook(bookId) {
    fetch(`http://localhost:3000/books/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ book: json })
      })
  }    
}

export default BookDetail;
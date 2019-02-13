import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Masthead from './Masthead/Masthead';
import Library from './Library/Library';
import DeleteModal from './Modal/DeleteModal';
import EditModal from './Modal/EditModal';
import AddModal from './Modal/AddModal';
import LoanModal from './Modal/LoanModal';
import ReturnModal from './Modal/ReturnModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchQuery: '',
      bookToDelete: null,
      bookToEdit: null,
      addingBook: false,
      bookToLoan: null,
      bookToReturn: null
    };
  }

  componentWillMount() {
    this.getBooks();
  }

  render() {
    return (
      <div className='App'>
        <div className='app-wrapper'>
          <Masthead 
            addBook={ () => this.setState({ addingBook: true })}
          />
          <Router>
            <Switch>
              <Route exact path="/" component={ () => 
                <Library 
                  books={ this.state.books }
                  deleteBook={ (book) => this.deleteBook(book) }
                  editBook={ (book) => this.editBook(book) }
                  loanBook={ (book) => this.loanBook(book) }
                  returnBook={ (book) => this.returnBook(book) }
                  searchQuery={ this.state.searchQuery }
                  onSearchChanged={ (query) => this.findBooks(query) }
                /> }
              />
              <Route path="/book/:bookId" component={ ({ match }) => 
                  <p>{ match.params.bookId }</p>
                }
              />
            </Switch>
          </Router>
        </div>

        { this.state.bookToDelete &&
            <DeleteModal 
              book={ this.state.bookToDelete }
              onActionClicked={ () => this.deleteBook(this.state.bookToDelete) }
              onCancelClicked={ () => this.setState({ bookToDelete: null }) }
            />
          }
          { this.state.bookToEdit &&
            <EditModal 
              book={ this.state.bookToEdit }
              onCancelClicked={ () => this.setState({ bookToEdit: null }) }
              onSaveChanges={ (book) => this.editBook(book) }
            />
          }
          { this.state.addingBook &&
            <AddModal 
              onCancelClicked={ () => this.setState({ addingBook: false }) }
              onSaveChanges={ (book) => this.addBook(book) }
            />
          }
          { this.state.bookToLoan &&
            <LoanModal 
              book={ this.state.bookToLoan }
              onCancelClicked={ () => this.setState({ bookToLoan: null }) }
              onSaveChanges={ (book) => this.loanBook(book) }
            />
          }
          { this.state.bookToReturn &&
            <ReturnModal 
              book={ this.state.bookToReturn }
              onActionClicked={ () => this.returnBook(this.state.bookToReturn) }
              onCancelClicked={ () => this.setState({ bookToReturn: null }) }
            />
          }
      </div>
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
 
  deleteBook(book) {
    if(!this.state.bookToDelete) {
      this.setState({ bookToDelete: book });
      return;
    }

    fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'delete'
      })
    .then(() => {
      this.setState({ bookToDelete: null });
      this.getBooks();
    })
  }  

  editBook(book) {
    if(!this.state.bookToEdit) {
      this.setState({ bookToEdit: book });
      return;
    }

    fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'put',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(() => {
      this.setState({ bookToEdit: null });
      this.getBooks();
    })
  }  

  addBook(book) {
    if(!this.state.addingBook) {
      this.setState({ addingBook: true });
      return;
    }

    fetch('http://localhost:3000/books/', {
        method: 'post',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(() => {
      this.setState({ addingBook: false, searchQuery: '' });
      this.getBooks();
    })
  }  

  loanBook(book) {
    if(!this.state.bookToLoan) {
      this.setState({ bookToLoan: book });
      return;
    }

    fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'put',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(() => {
      this.setState({ bookToLoan: null });
      this.getBooks();
    })
  }  

  returnBook(book) {
    if(!this.state.bookToReturn) {
      this.setState({ bookToReturn: book });
      return;
    }

    book.loanedTo = '';

    fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'put',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(() => {
      this.setState({ bookToReturn: null });
      this.getBooks();
    })
  }  

  findBooks(query) {
    fetch(`http://localhost:3000/books?q=${query}`, {
        method: 'get'
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ books: json, searchQuery: query })
      })
  }

}

export default App;
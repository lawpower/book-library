import React, { Component } from 'react';
import './App.scss';
import Masthead from './Masthead/Masthead';
import Library from './Library/Library';
import DeleteModal from './Modal/DeleteModal';
import EditModal from './Modal/EditModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchQuery: '',
      bookToDelete: null,
      bookToEdit: null
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
            onSearchChanged={ (query) => this.findBooks(query) }
          />
          <Library 
            books={ this.state.books }
            deleteBook={ (book) => this.deleteBook(book) }
            editBook={ (book) => this.editBook(book) }
            searchQuery={ this.state.searchQuery } 
          />
          { this.state.bookToDelete &&
            <DeleteModal 
              class='delete'
              book={ this.state.bookToDelete }
              onActionClicked={ () => this.deleteBook(this.state.bookToDelete) }
              onCancelClicked={ () => this.setState({ bookToDelete: null }) }
            >
          </DeleteModal>
          }
          { this.state.bookToEdit &&
            <EditModal 
              class='edit'
              book={ this.state.bookToEdit }
              onCancelClicked={ () => this.setState({ bookToEdit: null }) }
              onSaveChanges={ (book) => this.editBook(book) }
            >
          </EditModal>
          }

        </div>
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

    console.log('delete', book);
    // fetch(`http://localhost:3000/books/${book.id}`, {
    //     method: 'delete'
    //   })
    // .then(() => {
    //   this.setState({ bookToDelete: null });
    //   this.getBooks();
    // })
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
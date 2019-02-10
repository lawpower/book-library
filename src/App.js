import React, { Component } from 'react';
import './App.scss';
import Masthead from './Masthead/Masthead';
import Library from './Library/Library';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchQuery: ''
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
            deleteBook={ (bookId) => this.deleteBook(bookId) }
            searchQuery={ this.state.searchQuery } 
          />
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
 
  deleteBook(bookId) {
    console.log(bookId);
    // fetch(`http://localhost:3000/books/${bookId}`, {
    //     method: 'delete'
    //   })
    //   .then(() => {
    //     this.getBooks();
    //   })
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
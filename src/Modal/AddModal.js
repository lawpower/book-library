import React, { Component } from 'react';
import './Modal.scss';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      thumbnail: '',
      description: '',
    };
  }

  render() {
    return (
      <div className='modal add'>
        <div className='modal-overlay'>
        </div>
        <div className='modal-content'>
          <header className='modal-header'>
            <h2>Add Book</h2>
            <button className='modal-close' onClick={ () => this.props.onCancelClicked() }>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </i>
            </button>
          </header>
          <section className='modal-body'>
            <p>
              <label>
                <span>Title:</span>
                <input type='text' value={ this.state.title } onChange={ (event) => this.handleChange(event, 'title') } />
              </label>
            </p>
            <p>
              <label>
                <span>Author:</span>
                <input type='text' value={ this.state.author } onChange={ (event) => this.handleChange(event, 'author') } />
              </label>
            </p>
            <p>
              <label>
                <span>Thumbnail:</span>
                <input type='text' value={ this.state.thumbnail } onChange={ (event) => this.handleChange(event, 'thumbnail') } />
              </label>
            </p>
            <p>
              <label>
                <span>Description:</span>
                <textarea value={ this.state.description } onChange={ (event) => this.handleChange(event, 'description') } />
              </label>
            </p>
         </section>
          <footer className='modal-footer'>
            <ul className='buttons'>
             <li>
                <button className='button-cta' onClick={ () => this.onSaveChanges() }>
                  Save
                </button>
              </li>
              <li>
                <button className='button-cancel' onClick={ () => this.props.onCancelClicked() }>
                  Cancel
                </button>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }

  handleChange(event, attribute) {
    switch(attribute) {
      case('title'): {
        this.setState({ title: event.target.value });
        break;
      }
      case('author'): {
        this.setState({ author: event.target.value });
        break;
      }
      case('thumbnail'): {
        this.setState({ thumbnail: event.target.value });
        break;
      }
      case('description'): {
        this.setState({ description: event.target.value });
        break;
      }
      default: {
        return;
      }
    }
  }

  onSaveChanges() {
    const book = {
      "title": this.state.title,
      "author": this.state.author,
      "description": this.state.description,
      "thumbnail": this.state.thumbnail
    }

    this.props.onSaveChanges(book);
  }
}

export default AddModal;
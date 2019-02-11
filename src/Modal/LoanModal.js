import React, { Component } from 'react';
import './Modal.scss';

class LoanModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanedTo: '',
    };
  }

  render() {
    return (
      <div className='modal loan'>
        <div className='modal-overlay'>
        </div>
        <div className='modal-content'>
          <header className='modal-header'>
            <h2>Loan Book</h2>
            <button className='modal-close' onClick={ () => this.props.onCancelClicked() }>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </i>
            </button>
          </header>
          <section className='modal-body'>
            <p>
              <label>
                <span>Person's Name:</span>
                <input type='text' value={ this.state.loanedTo } onChange={ (event) => this.handleChange(event, 'loanedTo') } />
              </label>
            </p>
         </section>
          <footer className='modal-footer'>
            <ul className='buttons'>
             <li>
                <button className='button-cta' onClick={ () => this.onSaveChanges() }>
                  Loan
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
      case('loanedTo'): {
        this.setState({ loanedTo: event.target.value });
        break;
      }
      default: {
        return;
      }
    }
  }

  onSaveChanges() {
    const book = {
      "id": this.props.book.id,
      "title": this.props.book.title,
      "author": this.props.book.author,
      "description": this.props.book.description,
      "thumbnail": this.props.book.thumbnail,
      "loanedTo": this.state.loanedTo,
    }

    this.props.onSaveChanges(book);
  }
}

export default LoanModal;
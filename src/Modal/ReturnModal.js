import React, { Component } from 'react';
import './Modal.scss';

class ReturnModal extends Component {
  render() {
    return (
      <div className='modal return'>
        <div className='modal-overlay'>
        </div>
        <div className='modal-content'>
          <header className='modal-header'>
            <h2>Return Book</h2>
            <button className='modal-close' onClick={ () => this.props.onCancelClicked() }>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </i>
            </button>
          </header>
          <section className='modal-body'>
            <p>Are you sure you want to return '{ this.props.book.title }' to your library?</p>
          </section>
          <footer className='modal-footer'>
            <ul className='buttons'>
             <li>
                <button className='button-cta' onClick={ () => this.props.onActionClicked() }>
                  Return
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
}

export default ReturnModal;
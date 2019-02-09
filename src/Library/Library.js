import React, { Component } from 'react';
import './Library.scss';
import Book from './Book';

const allBooks = [{
    title: "Harry Potter and the Sorcerer's Stone",
    author: "JK Rowling",
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51U6bQbA8oL._SY346_.jpg"
  }, {
    title: "Harry Potter and the Chamber of Secrets",
    author: "JK Rowling",
    description: "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL._SY346_.jpg"
  }, {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "JK Rowling",
    description: "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51NuYi4-XoL._SY346_.jpg"
  }, {
    title: "Harry Potter and the Goblet of Fire",
    author: "JK Rowling",
    description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51WR45IjfSL.jpg"
  }, {
    title: "Harry Potter and the Order of the Phoenix",
    author: "JK Rowling",
    description: "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time....",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51-zRYQweBL.jpg"
  }
];

class Library extends Component {
  render() {
    return (
      <main className='library'>
        <p className='library-meta'>
          <span>12 Books</span>
          <button className='library-add'>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#004BAF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>                  
            </i>
            <span>Add Book</span>
          </button>
        </p>
        <ul className='library-books'>
          { allBooks.map((book, i) => {
            return <Book 
              key={ i }
              title={ book.title } 
              author={ book.author }  
              description={ book.description } 
              thumbnail={ book.thumbnail } />
            })
          }
        </ul>
      </main>
    );
  }
}

export default Library;
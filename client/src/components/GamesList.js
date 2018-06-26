import React from 'react';
import '../components/NavBar.css';
import Book from './book.js';

const GamesList = ({ gamesList }) => {
  if (gamesList) {

    const games = gamesList.map((game, index) => {
      return (
      <GameListItem key={index} game={game} /> )
    })

    return (
      <div className="GamesPage">
        <h2>Saved Games</h2>
        <div>{games}</div>
      </div>
    )
  } else {
    return (
      <div className="GamesPage">
        <h2>No saved games yet!</h2>
        <div>{`Link to start new game`}</div>
      </div>
    );
  }
}


export default BooksList;

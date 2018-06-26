import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './book.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGame } from '../actions/gameActions.js';

class Book extends Component {

  // handleClick = (e) =>  {
  //   e.preventDefault()
  //   this.props.onLike(this.state);
  // }

  loadGame = () => {

  }

  render() {
    const {game} = this.props
    return (
      <div className="GamesListItem">

        <h3>{`Game ${game.id} between Players 1 and 2, turn ${game.moves.size}`}</h4>
        <Link to={`/games/${game.id}`}>
          <button onClick={ this.loadGame }>Load Game</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const game = state.games.find((game) => game.id === parseInt(ownProps.game.id))
  if (game) {
    return { game: game }
  } else {
    return { game: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadGame: loadGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

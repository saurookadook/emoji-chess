import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import { newGame } from '../actions/gameActions.js'
import { updateGame } from '../actions/gameActions.js';
import { fetchGame } from '../actions/gameActions.js';

export class GameArea extends Component {

  render() {
    const { match, board }
    return (
      <div className="gameArea">
        <Board board={board}
      </div>
    )
  }

}

import { combineReducers } from 'redux';
import moves from './moves.js'

export const rootReducer = combineReducers({
  moves: moves
})

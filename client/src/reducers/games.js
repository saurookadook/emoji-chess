export default function games (state = [], action) {
  switch (action.type) {
    case 'FETCH_GAMES':
    case 'FETCH_GAME': // aka 'DEFAULT_BGAME ?
    case 'SAVE_GAME':
    case 'UPDATE_GAME':
      // update state array of game via move
    default:
      return state;
  }
}

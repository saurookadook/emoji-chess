export default function games (state = [], action) {
  switch (action.type) {
    case 'DEFAULT_BOARD':
    case 'UPDATE_BOARD':
    default:
      return state;
  }
}

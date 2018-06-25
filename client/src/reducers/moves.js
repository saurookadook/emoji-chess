export default function moves (state = [], action) {
  switch (action.type) {
    case 'MAKE_MOVE':
    case 'INVALID_MOVE':
    default:
      return state;
  }
}

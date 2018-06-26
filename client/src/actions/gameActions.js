export function fetchBooks () {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKS'});
    return fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(books => dispatch({ type: 'FETCH_BOOKS', books: books }));
  }
}

export function submitBook(formContent) {
  return (dispatch) => {
    //dispatch({ type: 'SUBMITTING_BOOK' });
    return fetch(`http://localhost:3001/books`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({book: formContent})})
      .then(resp => resp.json())
      .then(book => dispatch({ type: 'SUBMIT_BOOK', book: book}))
  }
}

export function updateBook(book) {
  return (dispatch) => {
    dispatch({ type: 'EDITING_BOOK'});
    return fetch(`http://localhost:3001/books/${book.id}`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        summary: book.summary,
        review: book.review,
        rating: book.rating,
        image_url: book.image_url
      })
    })
    .then(resp => resp.json())
    .then(book => dispatch({ type: 'EDITED_BOOK', book: book}))
  }
}

export function onLike(book) {
  return dispatch => {
    return fetch(`http://localhost:3001/books/${book.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ book }),
    })
      .then(res => res.json())
      .then(book => {
        dispatch({ type: 'INCREASE_LIKES', book })
      })
  }
}

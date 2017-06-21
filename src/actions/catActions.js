export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_CATS'});
    return fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(responseJSON => dispatch({type: 'FETCH_CATS', payload: responseJSON.images}))
  }
}

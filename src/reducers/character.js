const initialState = {
  character: false,
  isFetching: false,
  error: false
}

const character = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        ...state,
        character: action.character
      }
    case 'FETCH_CHARACTER_REQUEST':
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case 'FETCH_CHARACTER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: false,
        character: action.response
      }
    case 'FETCH_CHARACTER_ERROR':
      return {
        ...state,
        isFetching: false,
        error: true,
        character: false
      }
    default:
      return state
  }
}

export default character

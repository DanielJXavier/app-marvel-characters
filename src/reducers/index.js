const initialState = {
  isFetching: false,
  error: false,
  characters: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_REQUEST':
      return {
        isFetching: true,
        error: false,
        characters: []
      }
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        isFetching: false,
        error: false,
        characters: action.response
      }
      case 'FETCH_CHARACTERS_ERROR':
        return {
          isFetching: false,
          error: true,
          data: []
        }
    default:
      return state
  }
}

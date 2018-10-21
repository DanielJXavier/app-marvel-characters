const initialState = {
  isFetching: false,
  error: false,
  characters: [],
  limit: 16,
  offset: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_REQUEST':
      return {
        ...state,
        isFetching: true,
        error: false,
        characters: []
      }
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: false,
        characters: action.response,
        offset: action.response.length
      }
      case 'FETCH_CHARACTERS_ERROR':
        return {
          ...state,
          isFetching: false,
          error: true,
          characters: [],
          offset: 0
        }
    default:
      return state
  }
}

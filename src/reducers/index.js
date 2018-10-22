const initialState = {
  isFetching: false,
  error: false,
  filter: '',
  characters: [],
  limit: 40,
  offset: 0,
  total: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_REQUEST':
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: false,
        characters: [...state.characters, ...action.response.results],
        offset: state.characters.length + action.response.count,
        total: action.response.total
      }
    case 'FETCH_CHARACTERS_ERROR':
      return {
        ...state,
        isFetching: false,
        error: true,
        characters: [],
        offset: 0
      }
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    case 'RESET_CHARACTERS':
      return {
        ...state,
        characters: [],
        offset: 0
      }
    default:
      return state
  }
}

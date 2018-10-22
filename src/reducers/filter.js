const initialState = {
  filter: ''
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}

export default filter

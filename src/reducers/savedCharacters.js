const initialState = {
  characters: []
}

const saved = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CHARACTER':
      return {
        ...state,
        characters: [...state.characters.filter((character) => character.id !== action.character.id), action.character]
      }
    default:
      return state
  }
}

export default saved

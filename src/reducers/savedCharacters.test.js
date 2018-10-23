import savedCharacters from './savedCharacters'

const initialState = {
  characters: [
    {
      id: 1,
      name: 'name',
      description: 'description'
    }
  ]
}

describe('Reducer: savedCharacters', () => {
  it('Action: SAVE_CHARACTER', () => {
    const action = {
      type: 'SAVE_CHARACTER',
      character: {
        id: 1,
        name: 'newName',
        description: 'newDescription',
      }
    }
    const state = savedCharacters(initialState, action)
    expect(state).toEqual({
      ...initialState,
      characters: [
        {
          id: 1,
          name: 'newName',
          description: 'newDescription'
        }
      ]
    })
  })
})

import characters from './characters'

const initialState = {
  isFetching: false,
  error: false,
  characters: [],
  limit: 40,
  offset: 0,
  total: 0
}

describe('Reducer: characters', () => {
  it('Action: FETCH_CHARACTERS_REQUEST', () => {
    const action = {
      type: 'FETCH_CHARACTERS_REQUEST'
    }
    const state = characters(initialState, action)
    expect(state).toEqual({
      ...initialState,
      isFetching: true,
      error: false
    })
  })

  it('Action: FETCH_CHARACTERS_SUCCESS', () => {
    const action = {
      type: 'FETCH_CHARACTERS_SUCCESS',
      response: {
        results: [],
        count: 0,
        total: 0
      }
    }
    const state = characters(initialState, action)
    expect(state).toEqual({
      ...initialState,
      isFetching: false,
      error: false,
      characters: [],
      offset: 0,
      total: 0
    })
  })

  it('Action: FETCH_CHARACTERS_ERROR', () => {
    const action = {
      type: 'FETCH_CHARACTERS_ERROR'
    }
    const state = characters(initialState, action)
    expect(state).toEqual({
      ...initialState,
      isFetching: false,
      error: true,
      characters: []
    })
  })

  it('Action: RESET_CHARACTERS', () => {
    const action = {
      type: 'RESET_CHARACTERS'
    }
    const state = characters(initialState, action)
    expect(state).toEqual({
      ...initialState,
      characters: [],
      offset: 0
    })
  })
})

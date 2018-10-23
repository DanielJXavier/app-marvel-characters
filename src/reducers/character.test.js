import character from './character'

const initialState = {
  character: false,
  isFetching: false,
  error: false
}

describe('Reducer: character', () => {
  it('Action: SET_CHARACTER', () => {
    const action = {
      type: 'SET_CHARACTER',
      character: {}
    }
    const state = character(initialState, action)
    expect(state).toEqual({
      ...initialState,
      character: {}
    })
  })

  it('Action: FETCH_CHARACTER_REQUEST', () => {
    const action = {
      type: 'FETCH_CHARACTER_REQUEST'
    }
    const state = character(initialState, action)
    expect(state).toEqual({
      ...initialState,
      isFetching: true,
      error: false
    })
  })

  it('Action: FETCH_CHARACTER_SUCCESS', () => {
    const action = {
      type: 'FETCH_CHARACTER_SUCCESS',
      response: {}
    }
    const state = character(initialState, action)
    expect(state).toEqual({
      ...initialState,
      isFetching: false,
      error: false,
      character: {}
    })
  })

  it('Action: FETCH_CHARACTER_ERROR', () => {
    const action = {
      type: 'FETCH_CHARACTER_ERROR'
    }
    const state = character(initialState, action)
    expect(state).toEqual({
      ...initialState,
      isFetching: false,
      error: true,
      character: false
    })
  })
})

import filter from './filter'

const initialState = {
  filter: ''
}

describe('Reducer: filter', () => {
  it('Action: UPDATE_FILTER', () => {
    const action = {
      type: 'UPDATE_FILTER',
      filter: 'test'
    }
    const state = filter(initialState, action)
    expect(state).toEqual({
      ...initialState,
      filter: 'test'
    })
  })
})

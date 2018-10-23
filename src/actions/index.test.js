import * as actions from './index'

describe('Actions / Action Creators', () => {
  it('Action: updateFilter', () => {
    const updateFilter = actions.updateFilter()
    expect(updateFilter).toEqual({
      type: 'UPDATE_FILTER',
      filter: ''
    })
  })

  it('Action: updateFilter(\'test\')', () => {
    const updateFilter = actions.updateFilter('test')
    expect(updateFilter).toEqual({
      type: 'UPDATE_FILTER',
      filter: 'test'
    })
  })

  it('Action: fetchCharactersRequest', () => {
    const fetchCharactersRequest = actions.fetchCharactersRequest()
    expect(fetchCharactersRequest).toEqual({
      type: 'FETCH_CHARACTERS_REQUEST'
    })
  })

  it('Action: fetchCharactersSuccess({})', () => {
    const fetchCharactersSuccess = actions.fetchCharactersSuccess({})
    expect(fetchCharactersSuccess).toEqual({
      type: 'FETCH_CHARACTERS_SUCCESS',
      response: {}
    })
  })

  it('Action: fetchCharactersError', () => {
    const fetchCharactersError = actions.fetchCharactersError()
    expect(fetchCharactersError).toEqual({
      type: 'FETCH_CHARACTERS_ERROR'
    })
  })

  it('Action: resetCharacters', () => {
    const resetCharacters = actions.resetCharacters()
    expect(resetCharacters).toEqual({
      type: 'RESET_CHARACTERS'
    })
  })

  it('Action: setCharacter', () => {
    const setCharacter = actions.setCharacter()
    expect(setCharacter).toEqual({
      type: 'SET_CHARACTER',
      character: false
    })
  })

  it('Action: setCharacter({})', () => {
    const setCharacter = actions.setCharacter({})
    expect(setCharacter).toEqual({
      type: 'SET_CHARACTER',
      character: {}
    })
  })

  it('Action: fetchCharacterRequest', () => {
    const fetchCharacterRequest = actions.fetchCharacterRequest()
    expect(fetchCharacterRequest).toEqual({
      type: 'FETCH_CHARACTER_REQUEST'
    })
  })

  it('Action: fetchCharacterSuccess({})', () => {
    const fetchCharacterSuccess = actions.fetchCharacterSuccess({})
    expect(fetchCharacterSuccess).toEqual({
      type: 'FETCH_CHARACTER_SUCCESS',
      response: {}
    })
  })

  it('Action: fetchCharacterError', () => {
    const fetchCharacterError = actions.fetchCharacterError()
    expect(fetchCharacterError).toEqual({
      type: 'FETCH_CHARACTER_ERROR'
    })
  })

  it('Action: saveCharacter({})', () => {
    const saveCharacter = actions.saveCharacter({})
    expect(saveCharacter).toEqual({
      type: 'SAVE_CHARACTER',
      character: {}
    })
  })
})

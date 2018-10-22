// Common
const apiEndpoint = 'https://gateway.marvel.com:443/v1/public/characters'
const apiKey = 'f091c57c041c844850714908b043c831'

// Filter
export const updateFilter = (filter) => ({
  type: 'UPDATE_FILTER',
  filter
})

// Characters
export const fetchCharactersRequest = () => ({
  type: 'FETCH_CHARACTERS_REQUEST'
})

export const fetchCharactersSuccess = (response) => ({
  type: 'FETCH_CHARACTERS_SUCCESS',
  response
})

export const fetchCharactersError = () => ({
  type: 'FETCH_CHARACTERS_ERROR'
})

export const fetchCharacters = (reset = false) => (dispatch, getState) => {
  reset && dispatch(resetCharacters())

  dispatch(fetchCharactersRequest())

  const { filter } = getState().filter
  const { limit, offset } = getState().characters

  fetch(`${apiEndpoint}?apikey=${apiKey}${filter ? `&nameStartsWith=${filter}` : ''}&limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then(({ data }) => dispatch(fetchCharactersSuccess(data)))
    .catch(() => dispatch(fetchCharactersError()))
}

export const resetCharacters = () => ({
  type: 'RESET_CHARACTERS'
})

})

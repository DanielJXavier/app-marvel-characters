export const fetchCharactersRequest = () => ({
  type: 'FETCH_CHARACTERS_REQUEST'
})

export const fetchCharactersSuccess = response => ({
  type: 'FETCH_CHARACTERS_SUCCESS',
  response
})

export const fetchCharactersError = response => ({
  type: 'FETCH_CHARACTERS_ERROR'
})

export const fetchCharacters = () => (dispatch, getState) => {
  dispatch(fetchCharactersRequest())

  const { limit, offset } = getState()

  fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=f091c57c041c844850714908b043c831&limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(({ data }) => dispatch(fetchCharactersSuccess(data.results)))
    .catch(() => dispatch(fetchCharactersError()))
}

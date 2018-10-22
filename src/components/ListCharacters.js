import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCharacters, setCharacter } from '../actions'

import Loading from './Loading'
import Thumbnail from './Thumbnail'
import CharacterEdit from './CharacterEdit'

import './ListCharacters.sass'
import edit from '../assets/images/edit.svg'

class Characters extends Component {
  editCharacterHandler = (e) => {
    e.preventDefault()

    setCharacter(this.props.character)

    document.body.style.overflow = 'hidden'
  }

  componentDidMount() {
    const { characters, fetchCharacters } = this.props

    !characters.length && fetchCharacters()
  }

  render() {
    const { isFetching, error, characters, savedCharacters, total, editingCharacter } = this.props
    const { fetchCharacters, setCharacter } = this.props

    if (isFetching && !characters.length) return <Loading />

    if (error) return <p className="message">Ooops! It's impossible to get the characters now!</p>

    if (!characters.length) return <p className="message">Sorry! There is no characters with this name!</p>

    characters.forEach((character, i) => {
      savedCharacters.forEach((savedCharacter) => {
        if (character.id === savedCharacter.id) {
          characters[i].name = savedCharacter.name
          characters[i].description = savedCharacter.description
        }
      })
    })

    return (
      <section className="Characters">
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} className="character" key={character.id} onClick={() => setCharacter(character)} >
            <div className="header">
              <p className="title">
                {character.name}
              </p>
              <button className="button" onClick={(e) => this.editCharacterHandler(e)}>
                <img src={edit} alt="Edit icon" />
              </button>
            </div>
            { character.thumbnail &&
              <Thumbnail thumbnail={character.thumbnail} name={character.name} />
            }
          </Link>
        ))}
        <button className={`load-more ${characters.length >= total ? 'hidden' : ''} ${isFetching ? 'fetching' : ''}`} onClick={() => fetchCharacters()}>Load more</button>
        { editingCharacter && <CharacterEdit character={editingCharacter} /> }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.characters.isFetching,
  error: state.characters.error,
  characters: state.characters.characters,
  savedCharacters: state.savedCharacters.characters,
  total: state.characters.total,
  editingCharacter: state.character.character
})

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  setCharacter: (character) => dispatch(setCharacter(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCharacters, setCharacter } from '../actions'

import Loading from './Loading'

import './ListCharacters.sass'
import edit from '../assets/images/edit.svg'

class Characters extends Component {
  componentDidMount() {
    const { characters, fetchCharacters } = this.props

    !characters.length && fetchCharacters()
  }

  render() {
    const { isFetching, error, characters, total } = this.props
    const { fetchCharacters, setCharacter } = this.props

    if (isFetching && !characters.length) return <Loading />

    if (error) return <p>Ooops! It's impossible to get the characters now!</p>

    if (!characters.length) return <p>Sorry! There is no characters with this name!</p>

    return (
      <section className="Characters">
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} className="character" key={character.id} onClick={() => setCharacter(character)} >
            <div className="header">
              <p className="title">
                {character.name}
              </p>
              <button className="button">
                <img src={edit} alt="Edit icon" />
              </button>
            </div>
            { character.thumbnail && <img className="image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`${character.name} thumbnail`} /> }
          </Link>
        ))}
        <button className={`load-more ${characters.length >= total ? 'hidden' : ''} ${isFetching ? 'fetching' : ''}`} onClick={() => fetchCharacters()}>Load more</button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.characters.isFetching,
  error: state.characters.error,
  characters: state.characters.characters,
  total: state.characters.total
})

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  setCharacter: (character) => dispatch(setCharacter(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

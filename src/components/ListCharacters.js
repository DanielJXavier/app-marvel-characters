import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions'

import Loading from './Loading'

import './ListCharacters.sass'
import edit from '../assets/images/edit.svg'

class Characters extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    const { isFetching, error, characters, total, fetchCharacters } = this.props

    if (isFetching && !characters.length) return <Loading />

    if (error) return <p>Ooops! It's impossible to get the characters now!</p>

    if (!characters.length) return <p>Sorry! There is no characters with this name!</p>

    return (  
      <section className="characters">
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} className="character" key={character.id}>
            <div className="header">
              <p className="title">
                {character.name}
              </p>
              <button className="button">
                <img src={edit} alt="Edit icon" />
              </button>
            </div>
            <img className="image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`${character.name} thumbnail`} />
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
  fetchCharacters: () => dispatch(fetchCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

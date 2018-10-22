import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions'

import Loading from './Loading'
import Error from './Error'

import './ListCharacters.sass'
import edit from '../assets/images/edit.svg'

export class Characters extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    const { isFetching, error, characters, total } = this.props

    if (isFetching && !characters.length) return <Loading />

    if (error) return <Error />

    return <div className="characters">
      {characters.map(character => (
        <div className="character" key={character.id}>
          <div className="header">
            <p className="text">
              {character.name}
            </p>
            <button className="button">
              <img src={edit} alt="Edit icon" />
            </button>
          </div>
          <img className="image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`${character.name} thumbnail`} />
        </div>
      ))}
      <button className={`load-more ${characters.length >= total ? 'hidden' : ''} ${isFetching ? 'fetching' : ''}`} onClick={this.props.fetchCharacters}>Load more</button>
    </div>
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  error: state.error,
  characters: state.characters,
  total: state.total
})

const mapDispatchToProps = dispatch => ({
  fetchCharacters: () => dispatch(fetchCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

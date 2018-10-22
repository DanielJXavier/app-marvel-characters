import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCharacter } from '../actions'

import Loading from './Loading'
import Header from './Header'

import './Character.sass'

class Character extends Component {
  componentDidMount() {
    const { character, match } = this.props
    const { fetchCharacter } = this.props

    !character && fetchCharacter(match.params.characterId)
  }

  render() {
    const { isFetching, error, character } = this.props
    const { name, description, thumbnail, series } = character

    if (isFetching && !character) return <Loading />

    if (error) return <p>Ooops! It's impossible to get the character info now!</p>

    return (
      <section>
        <Header />
        <section className="character">
          <div className="header">
            { thumbnail &&
              <img className="image" src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name} thumbnail`} />
            }
            <h1 className="title">{name}</h1>
            <p className="description">{description}</p>
          </div>
          <div className="series">
            <h2 className="title">Top 20 {name}’s series</h2>
            { series && series.items && series.items.map((serie) => (
              <p className="serie" key={serie.id}>{serie.name}</p>
            ))}
          </div>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.character.isFetching,
  error: state.character.error,
  character: state.character.character
})

const mapDispatchToProps = (dispatch) => ({
  fetchCharacter: (character) => dispatch(fetchCharacter(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(Character)

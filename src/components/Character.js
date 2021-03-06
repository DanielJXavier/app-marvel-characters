import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCharacter, setCharacter } from '../actions'

import Loading from './Loading'
import Thumbnail from './Thumbnail'
import Header from './Header'

import './Character.sass'

export class Character extends Component {
  componentDidMount() {
    const { character, match } = this.props
    const { fetchCharacter } = this.props

    !character && fetchCharacter(match.params.characterId)
  }

  componentWillUnmount() {
    const { setCharacter } = this.props

    setCharacter()
  }

  render() {
    const { isFetching, error, character } = this.props
    const { name, description, thumbnail, series } = character

    if (isFetching && !character) return <Loading />

    if (error) return <p className="message">Ooops! It's impossible to get the character info now!</p>

    return (
      <section>
        <Header action="back" />
        <section className="Character">
          <div className="info">
            { thumbnail &&
              <Thumbnail thumbnail={thumbnail} name={name} />
            }
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
          </div>
          { series && series.items && series.items.length > 0 &&
            <div className="series">
              <h2 className="title">Top {name}’s series</h2>
              { series.items.map((serie, i) => (
                <p className="serie" key={`serie-${i}`}>{serie.name}</p>
              ))}
            </div>
          }
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
  fetchCharacter: (character) => dispatch(fetchCharacter(character)),
  setCharacter: () => dispatch(setCharacter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Character)

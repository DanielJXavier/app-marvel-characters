import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setCharacter, saveCharacter } from '../actions'

import './CharacterEdit.sass'

export class CharacterEdit extends Component {
  state = {
    name: this.props.character.name,
    description: this.props.character.description
  }

  nameHandler = (name) => {
    this.setState((state) => ({
      name
    }))
  }

  descriptionHandler = (description) => {
    this.setState((state) => ({
      description
    }))
  }

  overflowHandler = () => {
    document.body.style.overflow = 'visible'
  }

  cancelHandler = (e) => {
    e.preventDefault()

    this.props.setCharacter()
    this.overflowHandler()
  }

  saveHandler = (e) => {
    e.preventDefault()

    const { character } = this.props
    const { saveCharacter, setCharacter } = this.props
    const { name, description } = this.state

    const editedCharacter = { ...character, name, description }

    saveCharacter(editedCharacter)
    setCharacter()
    this.overflowHandler()
  }

  render() {
    const { character } = this.props

    return (
      <section className="CharacterEdit">
        <div className="container">
          <h2 className="title">Edit character ({character.name})</h2>
          <form className="form">
            <div className="input-container">
              <label className="label">Name:</label>
              <input className="input name" type="text" defaultValue={character.name} onChange={(e) => this.nameHandler(e.target.value)} />
            </div>
            <div className="input-container">
              <label className="label">Description:</label>
              <textarea className="input description" placeholder="Add a description" defaultValue={character.description} onChange={(e) => this.descriptionHandler(e.target.value)}></textarea>
            </div>
            <div className="buttons">
              <button className="button cancel" onClick={(e) => this.cancelHandler(e)}>Cancelar</button>
              <button className="button save" onClick={(e) => this.saveHandler(e)}>Salvar</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  character: state.character.character
})

const mapDispatchToProps = (dispatch) => ({
  setCharacter: () => dispatch(setCharacter()),
  saveCharacter: (character) => dispatch(saveCharacter(character))
})

CharacterEdit.propTypes = {
  character: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterEdit)

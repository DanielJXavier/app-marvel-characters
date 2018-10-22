import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCharacter, saveCharacter } from '../actions'

import './CharacterEdit.sass'

class EditCharacter extends Component {
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

  cancelHandler = (e) => {
    e.preventDefault()

    this.props.setCharacter()

    document.body.style.overflow = 'visible'
  }

  saveHandler = (e) => {
    e.preventDefault()

    const { character } = this.props
    const { saveCharacter, setCharacter } = this.props
    const { name, description } = this.state

    const editedCharacter = { ...character, name, description }

    saveCharacter(editedCharacter)
    setCharacter()

    document.body.style.overflow = 'visible'
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
              <input className="input" type="text" defaultValue={character.name} onChange={(e) => this.nameHandler(e.target.value)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCharacter)

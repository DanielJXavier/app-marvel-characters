import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from '../actions'

export class App extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    if (this.props.isFetching) {
      return <span>Loading...</span>
    }

    if (this.props.error) {
      return <span>Erro!</span>
    }

    return <span>Characters: {JSON.stringify(this.props.characters)}</span>
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  error: state.error,
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({
  fetchCharacters: () => dispatch(fetchCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

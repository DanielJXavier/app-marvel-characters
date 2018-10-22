import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFilter, fetchCharacters } from '../actions'

import ListCharacters from './ListCharacters'

import './App.sass'
import search from '../assets/images/search.svg'

class App extends Component {
  render() {
    const { updateFilter, fetchCharacters } = this.props

    return (
      <section>
        <div className="header">
          <h1 className="title">Marvel Characters</h1>
          <div className="search">
            <input type="text" placeholder="Search characters by name" onChange={(e) => updateFilter(e.target.value)} onKeyDown={(e) => e.keyCode === 13 && fetchCharacters(true)} />
            <button><img src={search} alt="Edit icon" onClick={() => fetchCharacters(true)} /></button>
          </div>
        </div>
        <ListCharacters />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  fetchCharacters: (reset) => dispatch(fetchCharacters(reset))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

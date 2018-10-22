import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFilter, fetchCharacters } from '../actions'

import './Header.sass'
import search from '../assets/images/search.svg'

class Header extends Component {
  render() {
    const { filter } = this.props
    const { updateFilter, fetchCharacters } = this.props

    return (
      <div className="Header">
        <h1 className="title">Marvel Characters</h1>
        <div className="search">
          <input type="text" placeholder="Search characters by name" value={filter} onChange={(e) => updateFilter(e.target.value)} onKeyDown={(e) => e.keyCode === 13 && fetchCharacters(true)} />
          <button><img src={search} alt="Edit icon" onClick={() => fetchCharacters(true)} /></button>
          {filter && <button className="clear" onClick={() => updateFilter() && fetchCharacters(true)}><span></span><span></span></button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter.filter
})

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  fetchCharacters: (reset) => dispatch(fetchCharacters(reset))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

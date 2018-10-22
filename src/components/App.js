import React from 'react'

import ListCharacters from './ListCharacters'

import './App.sass'
import search from '../assets/images/search.svg'

export default () => (
  <main>
    <div className="header">
      <h1 className="title">Marvel Characters</h1>
      <div className="search">
        <input type="text" placeholder="Search characters" />
        <button><img src={search} alt="Edit icon" /></button>
      </div>
    </div>
    <ListCharacters />
  </main>
)

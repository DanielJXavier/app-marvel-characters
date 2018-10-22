import React, { Component } from 'react'

import Header from './Header'
import ListCharacters from './ListCharacters'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <ListCharacters />
      </section>
    )
  }
}

export default App

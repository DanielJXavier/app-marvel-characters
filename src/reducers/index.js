import { combineReducers } from 'redux'

import filter from './filter'
import characters from './characters'
import character from './character'
import savedCharacters from './savedCharacters'

export default combineReducers({ filter, characters, character, savedCharacters })

import { combineReducers } from 'redux'

import filter from './filter'
import characters from './characters'
import character from './character'

export default combineReducers({ filter, characters, character })

import React from 'react'
import { shallow } from 'enzyme'
import { ListCharacters } from './ListCharacters'

describe('<ListCharacters />', () => {
  it('mounts', () => {
    const props = {
      characters: [{}],
      savedCharacters: [{}]
    }
    const wrapper = shallow(<ListCharacters {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it('calls fetchCharacters', () => {
    const props = {
      isFetching: true,
      characters: [],
      fetchCharacters: jest.fn()
    }
    expect(props.fetchCharacters.mock.calls.length).toEqual(0)
    shallow(<ListCharacters {...props} />)
    expect(props.fetchCharacters.mock.calls.length).toEqual(1)
  })
})

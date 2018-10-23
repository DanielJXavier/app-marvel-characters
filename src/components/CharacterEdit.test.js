import React from 'react'
import { shallow } from 'enzyme'
import { CharacterEdit } from './CharacterEdit'

describe('<CharacterEdit />', () => {
  it('mounts', () => {
    const props = {
      character: {
        id: 1,
        name: 'name',
        description: 'description'
      }
    }
    const wrapper = shallow(<CharacterEdit {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it('calls cancelHandler', () => {
    const props = {
      character: {
        id: 1,
        name: 'name',
        description: 'description'
      },
      setCharacter: jest.fn()
    }
    const wrapper = shallow(<CharacterEdit {...props} />)
    expect(props.setCharacter.mock.calls.length).toEqual(0)
    wrapper.find('.button.cancel').simulate('click', { preventDefault() {} })
    expect(props.setCharacter.mock.calls.length).toEqual(1)
  })

  it('calls saveHandler', () => {
    const props = {
      character: {
        id: 1,
        name: 'name',
        description: 'description'
      },
      setCharacter: jest.fn(),
      saveCharacter: jest.fn()
    }
    const wrapper = shallow(<CharacterEdit {...props} />)
    expect(props.setCharacter.mock.calls.length).toEqual(0)
    expect(props.saveCharacter.mock.calls.length).toEqual(0)
    wrapper.find('.button.save').simulate('click', { preventDefault() {} })
    expect(props.setCharacter.mock.calls.length).toEqual(1)
    expect(props.saveCharacter.mock.calls.length).toEqual(1)
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Thumbnail from './Thumbnail'

describe('<Thumbnail />', () => {
  it('mounts', () => {
    const props = {
      thumbnail: {
        path: '',
        extension: ''
      },
      name: ''
    }
    const wrapper = shallow(<Thumbnail {...props} />)
    expect(wrapper.length).toBe(1)
  })
})

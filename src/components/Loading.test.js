import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

describe('<Loading />', () => {
  it('mounts', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.length).toBe(1)
  })
})

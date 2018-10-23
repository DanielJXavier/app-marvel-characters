import React from 'react'
import { render } from 'enzyme'

import Loading from './Loading'

describe('<Loading />', () => {
  it('should render \'.load\', \'.load.reverse\' and \'.icon\'', () => {
    const wrapper = render(<Loading />)
    expect(wrapper.find('.load').length).toBe(2)
    expect(wrapper.find('.load.reverse').length).toBe(1)
    expect(wrapper.find('.icon').length).toBe(1)
  })
})

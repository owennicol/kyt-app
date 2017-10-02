import React from 'react'
import { shallow } from 'enzyme'
import Home from './'

describe('home component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })
  it('Test example', () => {
    expect(wrapper.is('section')).toBeTruthy()
  })

  it('renders 2 p tags', () => {
    expect(wrapper.find('p')).toHaveLength(2)
  })
})

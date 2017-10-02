import React from 'react'
import { shallow } from 'enzyme'
import App from './'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App>Test</App>)
  })

  it('Test example', () => {
    expect(wrapper.is('div')).toBeTruthy()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../index.tsx'

describe('render test') = () => {
  it('renders') = () => {
    const three = renderer.create(<Modal />)

    expect(three).toMatchSnapshot
  }
}

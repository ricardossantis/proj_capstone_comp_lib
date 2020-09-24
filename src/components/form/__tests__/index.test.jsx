import React from 'react'
import Form from '../index'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Form placeholder='digite aqui' />)

  expect(tree).toMatchSnapshot()
})

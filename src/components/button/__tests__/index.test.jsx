import React from 'react'
import Button from '../index'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const testButton = renderer.create(
    (<Button onClick={} text={false} />).toJSON()
  )

  expect(testButton).toMatchSnapshot()
})

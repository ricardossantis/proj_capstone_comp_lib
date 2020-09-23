import React from 'react'
import ButtonSubmit from '../buttonSubmit/'
import renderer from 'react-test-renderer'
import ButtonCancel from '../buttonCancel'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ButtonSubmit
        onClick={() => console.log('button submit')}
        text='Click to submit'
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders well', () => {
  const tree2 = renderer
    .create(<ButtonCancel onClick={() => {}} text='Click to cancel' />)
    .toJSON()
  expect(tree2).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../index.tsx'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('render test', () => {
  it('renders', () => {
    const three = renderer.create(<Modal />)

    expect(three).toMatchSnapshot
  })
})

describe('behavior', () => {
  it('simulates click events', () => {
    const onButtonClick = jest.fn()
    const wrapper = mount(<Modal visible={true} onXClick={onButtonClick} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClick).toHaveBeenCalled()
  })
})

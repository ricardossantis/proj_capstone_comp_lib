import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import { PageHeader } from 'proj-capstone-lib'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const wrapper = shallow(<App/>)
  return wrapper
}
describe('Tests for header', () => {
  it('Header is exported', () => {
    expect(PageHeader).toBeTruthy()
  })
  it('Render Header Page',()=>{
    const wrapper = setup()
    expect(wrapper.find(PageHeader).length).toBe(1)
  })
})


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

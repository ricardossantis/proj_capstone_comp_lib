import { ButtonSubmit, ButtonCancel, PageHeader, Card } from '.'
import Modal from './container/modal-container/index'
import Form from './components/form'


describe('Card', () => {
  it('is truthy', () => {
    expect(ButtonSubmit).toBeTruthy()
    expect(ButtonCancel).toBeTruthy()
    expect(Card).toBeTruthy()
    expect(Modal).toBeTruthy()
    expect(Form).toBeTruthy()
    expect(PageHeader).toBeTruthy()
  })
})

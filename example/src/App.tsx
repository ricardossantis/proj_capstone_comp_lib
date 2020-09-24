import React, { useState } from 'react'
import {
  Form,
  Modal,
  PageHeader,
  Card,
  ButtonSubmit,
  ButtonCancel
} from 'proj-capstone-lib'

import 'proj-capstone-lib/dist/index.css'

const App = () => {
  const [visible, setVisibility] = useState(false)
  const handleOnChange = () => {
    console.log('foi')
  }
  return (
    <>
      <PageHeader>teste</PageHeader>
      <Card
        url='https://static1.comicvine.com/uploads/scale_super/11118/111187046/5126812-geralt_ghoul_slayer_by_frostedflakes62-d9xd93e.jpg'
        title='Geralt Of Rivia'
        subtitle='The Blaviken Butcher'
      />
      <ButtonSubmit
        onClick={() => console.log('button submit')}
        text='Click to submit'
      />
      <ButtonCancel
        onClick={() => {
          console.log('button cancel')
          return false
        }}
        text='Click to cancel'
      />
      <div>
        <Modal visible={visible} title='Modal'>
          <Form onChange={handleOnChange} placeholder='digite aqui' />
          <input placeholder='teste' />
          <button>send</button>
        </Modal>
        <button onClick={() => setVisibility(!visible)}>Open Modal</button>
      </div>
    </>
  )
}

export default App

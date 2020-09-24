import React, { useState } from 'react'
import {  Modal, PageHeader, Card, ButtonSubmit, ButtonCancel, TextField } from 'proj-capstone-lib'

import 'proj-capstone-lib/dist/index.css'

const App = () => {
  const [visible, setVisibility] = useState(false)
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
      <TextField placeholder="teste"/>
      <Modal visible={visible} title='Modal'>
        <input placeholder='teste' />
        <button>send</button>
      </Modal>
      <button onClick={() => setVisibility(!visible)}>Open Modal</button>
    </div>

    </>
  )
}

export default App

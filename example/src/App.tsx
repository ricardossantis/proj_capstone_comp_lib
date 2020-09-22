import React, { useState } from 'react'
import { Modal } from 'proj-capstone-lib'
import 'proj-capstone-lib/dist/index.css'

const App = () => {
  const [visible, setVisibility] = useState(false)

  return (
    <div>
      <Modal visible={visible} title='Modal'>
        <input placeholder='teste' />
        <button>send</button>
      </Modal>
      <button onClick={() => setVisibility(!visible)}>Open Modal</button>
    </div>
  )
}

export default App

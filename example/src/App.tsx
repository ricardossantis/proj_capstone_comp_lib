import React from 'react'
import { Form } from 'proj-capstone-lib'
import 'proj-capstone-lib/dist/index.css'

const App = () => {
  const handleOnChange = () => {
    console.log('foi')
  }

  return <Form onChange={handleOnChange} placeholder='digite aqui' />
}

export default App

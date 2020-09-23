import React from 'react'

import { ButtonSubmit, ButtonCancel } from 'proj-capstone-lib'

import 'proj-capstone-lib/dist/index.css'

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App

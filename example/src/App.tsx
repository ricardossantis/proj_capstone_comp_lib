import React from 'react'

import { Button } from 'proj-capstone-lib'
import 'proj-capstone-lib/dist/index.css'

const App = () => {
  return <Button onClick={() => console.log('funciona')} text='Click me' />
}

export default App

import React, { useState } from 'react'
import Modal from '../../components/modal'

const ModalAction = () => {
  const [visible, setVisibility] = useState<boolean>(false)
  return <Modal onXClick={setVisibility(!visible)} />
}

export default ModalAction

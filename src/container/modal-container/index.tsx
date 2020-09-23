import React, { useState } from 'react'
import Modal from '../../components/modal'
import { ModalProps } from '../../interface'

const ModalAction = (props: ModalProps) => {
  const [visible, setVisibility] = useState<boolean>(false)
  return <Modal {...props} onXClick={() => setVisibility(!visible)} />
}

export default ModalAction

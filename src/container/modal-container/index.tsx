import React, { useEffect, useState } from 'react'
import Modal from '../../components/modal'
import { ModalProps } from '../../interface'

const ModalAction = (props: ModalProps) => {
  console.log(props.visible)
  const [visible, setVisibility] = useState(!props.visible)

  useEffect(() => {
    setVisibility(!visible)
  }, [props.visible])

  return (
    <Modal
      {...props}
      visible={visible}
      onXClick={() => setVisibility(!visible)}
    />
  )
}

export default ModalAction

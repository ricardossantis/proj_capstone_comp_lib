import React from 'react'
import styled from 'styled-components'
import { ModalProps } from '../../interface'

const Modal = ({ visible, title, children, onXClick }: ModalProps) => {
  return visible ? (
    <ModalDiv>
      <ModalHeader>
        <ModalTextBox>{title}</ModalTextBox>
        <ModalButton
          onClick={() => {
            onXClick()
          }}
        >
          X
        </ModalButton>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalDiv>
  ) : null
}

export default Modal

const ModalDiv = styled.div`
  width: 30%;
  min-height: 500px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalHeader = styled.div`
  width: 100%;
  background-color: #000;
  height: 50px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  color: white;
`

const ModalButton = styled.button`
  background-color: #777;
  color: #000;
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  margin: calc(100% - width);
`
const ModalTextBox = styled.div`
  width: fit-content;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
const ModalBody = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`

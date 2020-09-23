import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  onClick?: () => void
}

const ButtonCancel = ({ text, onClick }: Props) => {
  return <Cancel onClick={onClick}>{text}</Cancel>
}

export default ButtonCancel

const Cancel = styled.button`
  box-shadow: 2px 8px #cc4b00;
  border: 1px solid red;
  background-color: white;
  color: red;
  text-transform: uppercase;
  border-radius: 1rem;
  font-size: 1rem;
  width: 250px;
  height: 50px;
  padding: 1rem;
`

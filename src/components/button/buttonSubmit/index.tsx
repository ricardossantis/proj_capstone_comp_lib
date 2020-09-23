import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  onClick?: () => void
}

const ButtonSubmit = ({ text, onClick }: Props) => {
  return <Submit onClick={onClick}>{text}</Submit>
}

export default ButtonSubmit

const Submit = styled.button`
  box-shadow: 2px 8px #007bff;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  text-transform: uppercase;
  border-radius: 1rem;
  font-size: 1rem;
  width: 250px;
  height: 50px;
  padding: 1rem;
`

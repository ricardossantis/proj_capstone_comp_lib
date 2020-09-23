import * as React from 'react'
import styled from 'styled-components'

interface Props {
  onChange?: () => void
  placeholder: string
}

const Form = ({ placeholder, onChange }: Props) => {
  return (
    <form onChange={onChange}>
      <StyledInput placeholder={placeholder} />
    </form>
  )
}
export default Form

const StyledInput = styled.input`
  font-size: 14px;
  padding: 6px 8px;
  border: 3px solid black;
  width: 100px;
`

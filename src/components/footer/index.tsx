import React from 'react'
import styled from 'styled-components'

interface Props {
  children: string | React.ReactNode
}

const Footer = ({ children }: Props) => {
  return <StyledFooter>{children}</StyledFooter>
}

export default Footer

const StyledFooter = styled.footer`
  height: 20vh;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(222, 215, 215);
  left: 0;
  bottom: 0;
  width: 100%;
`

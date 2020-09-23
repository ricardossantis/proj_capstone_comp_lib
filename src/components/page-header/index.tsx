import * as React from 'react'
import styled from 'styled-components'
interface Props {
  children: string | object
}

export const PageHeader = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>
}
const StyledHeader = styled.div`
  position: -webkit-sticky; 
  position: sticky;
  top: 0;
  max-width: 100vw;
  min-height: 10vh;
  max-height: 30vh;
  white-space: wrap;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-around;
  flex: 1 1 auto;
  background: rgb(232, 174, 249);
  background: linear-gradient(
    90deg,
    rgba(232, 174, 249, 1) 0%,
    rgba(247, 180, 241, 1) 46%,
    rgba(232, 174, 249, 1) 100%
  );
`

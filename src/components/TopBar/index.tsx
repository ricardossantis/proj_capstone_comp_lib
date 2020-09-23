import * as React from 'react'
import styled from 'styled-components'
interface Props {
  children: string|object
}

export const PageHeader = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>
}
const StyledHeader = styled.div`
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  top: 0;
  max-width: 100vw;
  min-height: 10vh;
  max-height: 30vh;
  white-space: wrap;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1 1 auto;
  background: rgb(181, 0, 236);
  background: linear-gradient(
    90deg,
    rgba(181, 0, 236) 0%,
    rgba(194, 4, 177) 46%,
    rgba(171, 3, 242) 100%
  );
`

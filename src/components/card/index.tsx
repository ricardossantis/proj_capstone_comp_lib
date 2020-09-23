import * as React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  subtitle: string
  url?: string
}

const Card = ({ title, subtitle, url }: Props) => {
  return (
    <CardContainer>
      <Figure>
        <Image src={url} />
      </Figure>
      <DisplayInfo>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </DisplayInfo>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 25%);
`
const Figure = styled.figure`
  /* width: 350px; */
`

const Image = styled.img`
  width: 300px;
`

const DisplayInfo = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 0px 0px 15px 15px;

  h1 {
    font-size: 25px;
    color: grey;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: grey;
  }
`

import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

import useMenu from 'hooks/useMenu'

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
`

const Title = styled.div`
  padding-top: 52px;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 64pt;

  @media (max-width: 755px) {
    font-size: 30pt;
  }
`
const AppHeader = ({ name, href }) => (
  <Helmet>
    <title>{name}</title>
    <link rel="icon" type="image/svg+xml" href={href} />
  </Helmet>
)

const ScreenComponent = () => {
  const {
    activeObject: { name, image },
  } = useMenu()

  return (
    <>
      <AppHeader name={name} href={image} />
      <Title>{name}</Title>
      <Image src={image} alt={name} />
    </>
  )
}

export default ScreenComponent

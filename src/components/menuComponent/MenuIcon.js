import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 51.2px;
`

const Img = styled.img`
  height: 100%;
`

const MenuIcon = (props) => (
  <ImageContainer>
    <Img {...props} />
  </ImageContainer>
)

export default MenuIcon

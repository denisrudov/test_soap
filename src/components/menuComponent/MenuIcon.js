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

const MenuIcon = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <ImageContainer>
        <Img src={src} alt={alt} />
      </ImageContainer>
    </div>
  )
}

export default styled(MenuIcon)``

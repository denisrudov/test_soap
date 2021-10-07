import React from 'react'
import styled from 'styled-components'
import useMenu from 'hooks/useMenu'

const ScreenComponent = ({ className }) => {
  const {
    activeObject: { name, image },
  } = useMenu()

  return (
    <div className={className}>
      <div className={`${className}__title`}>{name}</div>
      <img className={`${className}__image`} src={image} alt={name} />
    </div>
  )
}

export default styled(ScreenComponent)`
  &__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    padding-top: 52px;
    text-align: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 64pt;
  }
`

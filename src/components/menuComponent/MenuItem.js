import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import MenuIcon from 'components/menuComponent/MenuIcon'

const MenuItem = ({ className, image, name, active = () => {}, path }) => {
  const { push } = useHistory()

  const onHandleClick = useCallback(() => {
    push(`/${path}`)
  }, [path, push])

  return (
    <div
      onClick={onHandleClick}
      className={cn(className, { [`${className}__active`]: active(path) })}
    >
      <MenuIcon src={image} />
      <div className={`${className}__name`}>{name}</div>
    </div>
  )
}

export default styled(MenuItem)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 15px;
  cursor: pointer;
  padding-top: 25px;

  &__active {
    background: rgb(245, 169, 108);
    background: linear-gradient(
      180deg,
      rgba(245, 169, 108, 1) 0%,
      rgba(253, 229, 136, 1) 100%
    );
    border-radius: 8px 8px 0 0;
  }

  &__name {
    text-align: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: #000;
    font-size: 12px;
    line-height: 16px;
    padding-top: 16.2px;
  }
`

import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import MenuIcon from 'components/menuComponent/MenuIcon'

const ItemName = styled.div`
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 12px;
  line-height: 16px;
  padding-top: 16.2px;
`

const MenuItem = ({ className, image, name, active = () => {}, path }) => {
  const { push } = useHistory()

  const onHandleClick = useCallback(() => {
    push(`/${path}`)
  }, [path, push])

  return (
    <li
      onClick={onHandleClick}
      className={cn(className, { [`${className}__active`]: active(path) })}
    >
      <MenuIcon src={image} />
      <ItemName>{name}</ItemName>
    </li>
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
  border-radius: 8px 8px 0 0;

  &__active {
    background: rgb(245, 169, 108);
    background: linear-gradient(
      180deg,
      rgba(245, 169, 108, 1) 0%,
      rgba(253, 229, 136, 1) 100%
    );
  }
`

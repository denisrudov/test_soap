import styled from 'styled-components'

import useMenu from 'hooks/useMenu'
import MenuItem from 'components/menuComponent/MenuItem'

const MenuComponent = ({ className }) => {
  const { navigation, isActiveItem } = useMenu()

  return (
    <ul className={className}>
      {navigation.map((navItem, idx) => (
        <MenuItem active={isActiveItem} key={idx} {...navItem} />
      ))}
    </ul>
  )
}

export default styled(MenuComponent)`
  display: flex;
`

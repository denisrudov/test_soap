import styled from 'styled-components'

import useMenu from 'hooks/useMenu'
import MenuItem from 'components/menuComponent/MenuItem'
import { useParams } from 'react-router-dom'

const MenuComponent = ({ className }) => {
  const { navigation } = useMenu()
  const { name: routeName } = useParams()

  return (
    <div className={className}>
      {navigation.map((navItem, idx) => (
        <MenuItem active={routeName === navItem.path}
                  key={idx} {...navItem}/>
      ))}
    </div>
  )
}

export default styled(MenuComponent)`
  display: flex;
`

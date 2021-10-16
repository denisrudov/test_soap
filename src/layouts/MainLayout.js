import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import MenuComponent from 'components/menuComponent/MenuComponent'
import useMenu from 'hooks/useMenu'
import NotFound from 'components/notFound/NotFound'

const MainLayout = ({ component: Component, className, ...rest }) => {
  const { pathname } = useLocation()
  const { navigation } = useMenu()

  const keys = navigation.map(({ path }) => path)

  if (pathname === '/') {
    return <Redirect to={`/${navigation[0].path}`} />
  }
  if (!keys.some((keyItem) => `/${keyItem}` === pathname)) {
    return <NotFound />
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <div className={className}>
          <div className={`${className}__content`}>
            <Component {...props} />
          </div>
          <MenuComponent {...props} />
        </div>
      )}
    />
  )
}

export default styled(MainLayout)`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
`

import navigation from 'navigation'
import { useParams } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { name: locationPath } = useParams()
  const navigationItems = navigation.map(({ name, image }) => ({
    name,
    image,
    path: name.toLowerCase(),
  }))

  /**
   * Gets items keys
   * @type {string[]}
   */
  const keys = navigationItems.map(({ path }) => path)

  /**
   * Get Item from list
   * @param pathKey
   * @return {{image: *, path: *, name: *}}
   */
  const getMenuItem = (pathKey) =>
    navigationItems.find(({ path }) => path === pathKey)

  /**
   * Check for active menu item
   * @param pathKey
   * @return {boolean}
   */
  const isActiveItem = (pathKey) => pathKey === locationPath

  return {
    navigation: navigationItems,
    getMenuItem,
    activeObject: getMenuItem(locationPath),
    isActiveItem,
    keys,
  }
}

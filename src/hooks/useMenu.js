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

  const getMenuItem = (pathKey) =>
    navigationItems.find(({ path }) => path === pathKey)

  return {
    navigation: navigationItems,
    getMenuItem,
    activeObject: getMenuItem(locationPath),
  }
}

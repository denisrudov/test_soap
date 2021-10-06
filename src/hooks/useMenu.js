import navigation from 'navigation'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigationItems = navigation.map(
    ({ name, image }) =>
      ({ name, image, path: name.toLowerCase() }))

  const getMenuItem = (pathKey) => navigationItems.find(
    ({ path }) => path === pathKey)

  return {
    navigation: navigationItems,
    getMenuItem
  }
}

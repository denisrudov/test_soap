import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import ScreenComponent from 'components/screen/ScreenComponent'
import MainLayout from 'layouts/MainLayout'

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <MainLayout path={'/:name'} component={ScreenComponent} />
      </Router>
    </HelmetProvider>
  )
}

export default App

import { BrowserRouter as Router } from 'react-router-dom'
import ScreenComponent from 'components/screen/ScreenComponent'
import MainLayout from 'layouts/MainLayout'

const App = () => {
  return (
    <Router>
      <MainLayout path={'/:name'} component={ScreenComponent} />
    </Router>
  )
}

export default App

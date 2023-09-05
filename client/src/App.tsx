import './App.css'
import Layout from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import PagesRouter from './pages'
import { Provider } from 'react-redux'
import store from './redux'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <Layout>
            <PagesRouter />
          </Layout>
        </Router>
      </HelmetProvider>
    </Provider>
  )
}

export default App

import './App.css'
import Layout from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import PagesRouter from './pages'
import { Provider } from 'react-redux'
import store from './redux'
import { HelmetProvider } from 'react-helmet-async'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {



  return (
    <Provider store={store}>
      <HelmetProvider>
        <TransitionGroup>
          <CSSTransition key="page" timeout={300} classNames="page" unmountOnExit>
            <Router basename='/'>
              <Layout>
                <PagesRouter />
              </Layout>
            </Router>
          </CSSTransition>
        </TransitionGroup>
      </HelmetProvider>
    </Provider>
  )
}

export default App

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Opeqe from './components/Opeqe'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import opeqee from './reducer/Opeqe'
import logger from 'redux-logger'

const store = createStore(opeqee, applyMiddleware(logger))

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Opeqe} />
      </Router>
    </Provider>
  )
}

export default App

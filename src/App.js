import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Opeqe from './components/Opeqe'

function App () {
  return (
    <Router>
      <Route path='/' exact component={Opeqe} />
    </Router>
  )
}

export default App

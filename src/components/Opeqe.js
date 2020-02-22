import React, { Component } from 'react'
import Header from './Header'
import Middle from './Middle'
import Main from './Main'

export default class Opeqe extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <>
        <Header />
        <Middle />
        <Main />
      </>
    )
  }
}

import React, { Component } from 'react'
import HeaderContainer from '../container/HeaderContainer'
import Middle from './Middle'
import MainContainer from '../container/MainContainer'

export default class Opeqe extends Component {
  render () {
    return (
      <>
        <HeaderContainer />
        <Middle />
        <MainContainer />
      </>
    )
  }
}

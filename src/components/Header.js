import React, { Component } from 'react'
import opeqeImage from '../photos/image_2020-02-21_12-33-03.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

export default class Header extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <div className='header-div'>
        <img src={opeqeImage} className='opeqe-image' />
        <div className='header-item-div'>
          <span className='header-item'>Reservation</span>
          <span className='header-item'>Orders</span>
          <span className='header-item'>Locations</span>
          <span className='header-login-item'>Log In</span>
          <span className='header-signup-item'>Sign Up</span>
          <ShoppingBasketIcon className='header-icon' />
        </div>

      </div>
    )
  }
}

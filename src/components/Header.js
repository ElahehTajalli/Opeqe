import React, { Component } from 'react'
import opeqeImage from '../photos/image1.png'
import newImage from '../photos/image2.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

export default class Header extends Component {
  render () {
    return (
      <div className='header-div' style={{ background: this.props.header }}>
        {this.props.header === '#efefef' &&
          <img src={opeqeImage} className='opeqe-image' />}
        {this.props.header !== '#efefef' &&
          <img src={newImage} className='opeqe-image' />}
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

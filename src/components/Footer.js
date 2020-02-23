import React, { Component } from 'react'
import FooterImage from '../photos/image_2020-02-22_15-08-02.png'
import GoogleImage from '../photos/google.svg'
import AppleImage from '../photos/apple.svg'
import OpeqeImage from '../photos/image_2020-02-22_18-31-08.png'

export default class Header extends Component {
  render () {
    return (
      <div style={{ background: 'black' }}>
        <img src={FooterImage} style={{ width: '100%' }} />
        <div className='footer-div'>
          <div className='store-div'>
            <div>
              <img src={AppleImage} className='image-store' alt='apple store' />
              <img src={GoogleImage} className='apple-image' alt='play store' />
            </div>
            <div className='footer-menu-div'>
              <span className='footer-menu'>About</span>
              <span className='footer-menu'>Services</span>
              <span className='footer-menu'>Support</span>
              <span className='footer-menu'>Gallery</span>
              <span className='footer-menu'>Terms</span>
              <span className='footer-menu'>Locations</span>
            </div>
          </div>

          <div className='second-footer-div'>
            <div className='second-div-1'>
              <div className='main-menu'>
                <img src={OpeqeImage} alt='opeqe image' style={{ width: '120px', alignSelf: 'self-start' }} />
              </div>
              <div className='main-menu'>
                <span className='title-main-menu-footer'>Main Menu</span>
                <span className='text-main-menu-footer'>Pickup</span>
              </div>
              <div className='main-menu' style={{ marginBottom: '60px' }}>
                <span className='title-main-menu-footer'>Orders</span>
                <span className='text-main-menu-footer'>Upcoming Orders</span>
                <span className='text-main-menu-footer'>Recent Orders</span>
              </div>
              <div className='main-menu'>
                <span className='title-main-menu-footer'>Reservation</span>
                <span className='text-main-menu-footer'>Recent Reservation</span>
                <span className='text-main-menu-footer'>Wait To Be Seated</span>
              </div>
            </div>
            <div className='second-div-1' style={{ borderBottom: '1px solid #a5a5a5' }}>
              <div className='main-menu'>
                <span className='title-main-menu-footer'>Profile</span>
                <span className='text-main-menu-footer'>Promos & Credits</span>
                <span className='text-main-menu-footer'>Rewards</span>
              </div>
              <div className='main-menu'>
                <span className='title-main-menu-footer'>Special Offers</span>
                <span className='text-main-menu-footer'>Chief Special</span>
                <span className='text-main-menu-footer'>code FREEDINE</span>
                <span className='text-main-menu-footer'>Breakfast Special</span>
              </div>
              <div className='main-menu'>
                <span className='title-main-menu-footer'>Support</span>
                <span className='text-main-menu-footer'>Contact Us</span>
                <span className='text-main-menu-footer'>Live Chat</span>
              </div>
            </div>
          </div>

          <div className='last-footer-div'>
            <span style={{ color: 'white' }}>Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.</span>
            <span style={{ color: '#a5a5a5', marginBottom: '50px' }}>Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.</span>
            <span style={{ color: '#a5a5a5', marginBottom: '50px' }}>©2019 OPEQE INC | Terms & Conditions | Privacy Policy</span>
          </div>

        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Cards from './Cards'
import menu from './menu.json'
import $ from 'jquery'

export default class Middle extends Component {
  scroll (direction) {
    const far = $('.image-containerss').width() / 2 * direction
    const pos = $('.image-containerss').scrollLeft() + far
    $('.image-containerss').animate({ scrollLeft: pos }, 1000)
  }

  scrollNext (direction) {
    const far = $('.image-containers').width() / 2 * direction
    const pos = $('.image-containers').scrollLeft() + far
    $('.image-containers').animate({ scrollLeft: pos }, 1000)
  }

  render () {
    return (
      <div className='main-div'>

        <div className='main-card-div'>
          <span className='main-title'> Special Offers</span>

          <div className='wrapper'>
            <div className='image-container' id='container'>
              <div className='scrolls'>
                <div className='bar'>
                  <div className='cursor' style={{ left: '0%' }} />
                </div>
              </div>
              <div className='image'> <Cards menu={menu[1]} /> </div>
              <div className='image'> <Cards menu={menu[4]} /> </div>
            </div>
          </div>
        </div>

        <div className='main-card-div'>
          <span className='main-title'> Salad</span>

          <div className='wrapper'>
            <div className='image-container' id='container'>
              <div className='scrolls'>
                <div className='bar'>
                  <div className='cursor' style={{ left: '0%' }} />
                </div>
              </div>
              <div className='image'> <Cards menu={menu[11]} /> </div>
            </div>
          </div>
        </div>

        <div className='main-card-div'>
          <span className='main-title'> Main Course</span>
          <div className='wrapper'>
            <a className='prev' onClick={() => this.scroll(-1.9)}>&#10094;</a>
            <div className='image-containerss' id='container'>
              <div className='image'> <Cards menu={menu[5]} /> </div>
              <div className='image'> <Cards menu={menu[11]} /> </div>
              <div className='image'> <Cards menu={menu[2]} /> </div>
              <div className='image'> <Cards menu={menu[6]} /> </div>
              <div className='image'> <Cards menu={menu[8]} /> </div>
              <div className='image'> <Cards menu={menu[10]} /> </div>
              <div className='image'> <Cards menu={menu[3]} /> </div>
              <div className='image'> <Cards menu={menu[7]} /> </div>
              <div className='image'> <Cards menu={menu[0]} /> </div>
            </div>
            <a className='next' onClick={() => this.scroll(1.9)}>&#10095;</a>
          </div>
        </div>

        <div className='main-card-div'>
          <span className='main-title'> American</span>
          <div className='wrapper'>
            <a className='prev' onClick={() => this.scrollNext(-1.9)}>&#10094;</a>
            <div className='image-containers' id='container'>
              <div className='image'> <Cards menu={menu[4]} /> </div>
              <div className='image'> <Cards menu={menu[1]} /> </div>
              <div className='image'> <Cards menu={menu[6]} /> </div>
              <div className='image'> <Cards menu={menu[13]} /> </div>
              <div className='image'> <Cards menu={menu[11]} /> </div>
              <div className='image'> <Cards menu={menu[8]} /> </div>
              <div className='image'> <Cards menu={menu[3]} /> </div>
              <div className='image'> <Cards menu={menu[4]} /> </div>
              <div className='image'> <Cards menu={menu[13]} /> </div>
              <div className='image'> <Cards menu={menu[9]} /> </div>
              <div className='image'> <Cards menu={menu[1]} /> </div>
              <div className='image'> <Cards menu={menu[7]} /> </div>
              <div className='image'> <Cards menu={menu[3]} /> </div>
              <div className='image'> <Cards menu={menu[12]} /> </div>
              <div className='image'> <Cards menu={menu[0]} /> </div>
            </div>
            <a className='next' onClick={() => this.scrollNext(1.9)}>&#10095;</a>
          </div>
        </div>
      </div>
    )
  }
}

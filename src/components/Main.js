import React, { Component } from 'react'
import Cards from './Cards'
import menu from './menu.json'
import $ from 'jquery'
import Footer from './Footer'
import { changeHeader } from '../action/Opeqe'

export default class Middle extends Component {
  constructor () {
    super()

    this.state = {
      checkStartFirst: true,
      checkFinishFirst: false,
      checkStartSecond: true,
      checkFinishSecond: false
    }
  }

  scroll (direction) {
    const far = $('.image-containerss').width() / 2 * direction
    const pos = $('.image-containerss').scrollLeft() + far
    $('.image-containerss').animate({ scrollLeft: pos }, 1000)

    if (pos <= 0) {
      this.setState({ checkStartFirst: true })
    } else {
      this.setState({ checkStartFirst: false })
    }

    if (($('.image-containerss')[0].scrollWidth) - 100 <= pos + far) {
      this.setState({ checkFinishFirst: true })
    } else {
      this.setState({ checkFinishFirst: false })
    }
  }

  scrollNext (direction) {
    const far = $('.image-containers').width() / 2 * direction
    const pos = $('.image-containers').scrollLeft() + far
    $('.image-containers').animate({ scrollLeft: pos }, 1000)
    if (pos <= 0) {
      this.setState({ checkStartSecond: true })
    } else {
      this.setState({ checkStartSecond: false })
    }

    if (($('.image-containers')[0].scrollWidth) - 100 <= pos + far) {
      this.setState({ checkFinishSecond: true })
    } else {
      this.setState({ checkFinishSecond: false })
    }
  }

  test () {
    console.log($(window).scrollTop())
    var height = $(window).scrollTop()
    if (height > 80) {
      this.props.dispatch(changeHeader('#cfcfcf'))
    } else {
      this.props.dispatch(changeHeader('#efefef'))
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', () => this.test())
  }

  // componentWillUnmount() {
  //     window.removeEventListener('scroll', ()=>this.test());
  // }

  render () {
    return (
      <div className='all-main-div'>
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
              {!this.state.checkStartFirst &&
                <a style={{ display: 'none' }} className='prev' onClick={() => this.scroll(-1.9)}>&#10094;</a>}
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
              {!this.state.checkFinishFirst &&
                <a style={{ display: 'none' }} className='next' onClick={() => this.scroll(1.9)}>&#10095;</a>}
            </div>
          </div>

          <div className='main-card-div' style={{ marginBottom: '72px' }}>
            <span className='main-title'> American</span>
            <div className='wrapper'>
              {!this.state.checkStartSecond &&
                <a style={{ display: 'none' }} className='prev' onClick={() => this.scrollNext(-1.9)}>&#10094;</a>}
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
              {!this.state.checkFinishSecond &&
                <a style={{ display: 'none' }} className='next' onClick={() => this.scrollNext(1.9)}>&#10095;</a>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

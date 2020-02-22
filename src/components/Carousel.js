
import React from 'react'
import $ from 'jquery'

// const $ = window.$;

export default class Carousel extends React.Component {
  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }


  scroll(direction){
    let far = $( '.image-container' ).width()/2*direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate( { scrollLeft: pos }, 1000)
  }

  render() {
    return <div className="main">
          </div>;
  }
}
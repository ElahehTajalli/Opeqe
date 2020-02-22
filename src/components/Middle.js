import React, { Component } from 'react'
import middleImage from '../photos/image_2020-02-21_14-56-44.png'
import Radio from '@material-ui/core/Radio'

export default class Middle extends Component {
  constructor () {
    super()

    this.state = {
      selectedValue: 'a'
    }
  }

  handleChange (event) {
    this.setState({ selectedValue: event.target.value })
  }

  render () {
    return (
      <div className='middle-div'>
        <div className='image-text-div'>
          <div className='text-div'>
            <span className='title-style'>Chief Special</span>
            <span>Get $10 off when you order $20 or more T-Bone Steak & Eggs</span>
            <span className='first-word'>Use <span className='second-word'>Chief Special</span></span>
          </div>

          <img src={middleImage} className='middle-image' />
        </div>
        <div className='radio-div'>
          <Radio
            checked={this.state.selectedValue === 'a'}
            onChange={(e) => this.handleChange(e)}
            value='a'
            inputProps={{ 'aria-label': 'A' }}
          />
          <Radio
            checked={this.state.selectedValue === 'b'}
            onChange={(e) => this.handleChange(e)}
            value='b'
            inputProps={{ 'aria-label': 'B' }}
          />
          <Radio
            checked={this.state.selectedValue === 'c'}
            onChange={(e) => this.handleChange(e)}
            value='c'
            inputProps={{ 'aria-label': 'C' }}
          />
        </div>
      </div>
    )
  }
}

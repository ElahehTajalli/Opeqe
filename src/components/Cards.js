import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import TimerIcon from '@material-ui/icons/Timer';



export default class Cards extends Component {
  render () {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image={this.props.menu.image}
            title={this.props.menu.title}
            style={{ height: '140px' }}
          />
          <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom variant='h5' component='h2'>
              {this.props.menu.title}
            </Typography>
            <div>
              <span style={{ color: '#026764', fontSize: '14px' }}>
                {this.props.menu.menuType.title}
              </span>
              <Typography variant='body2' color='textSecondary' component='span'>
              , {this.props.menu.cuisineType.title}, {this.props.menu.courseType.title}
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography className='timer-div' variant='body2' color='textSecondary' component='span' style={{ display: 'flex', alignItems: 'center' }}>
                  <TimerIcon className='timer-icon' /> 4-6 Mins
                </Typography>
                <Typography className='price-div' variant='body2' color='textSecondary' component='span'>
                $ {this.props.menu.price}
                </Typography>
              </div>
              <span className='pick-div'>
                Free Pickup
              </span>

            </div>
            
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

export default class Cards extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image={this.props.menu.image}
            title={this.props.menu.title}
            style={{ height: '140px' }}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {this.props.menu.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {this.props.menu.menuType.title}, {this.props.menu.cuisineType.title}, {this.props.menu.courseType.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
                $ {this.props.menu.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}
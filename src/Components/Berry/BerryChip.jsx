import React, { Component } from 'react'
import { Chip, Avatar, FontIcon } from 'material-ui'

class BerryChip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      berry: props.berry,
    }
  }

  render() {
    return (
      <Chip backgroundColor={'#1dae41'} labelColor={'#ffffff'}>
        <Avatar
          icon={<FontIcon className="fab fa-pagelines" />}
          color={'#1DAE41'}
          backgroundColor={'#ffffff'}
        />
        {this.state.berry.name}
      </Chip>
    )
  }
}

export { BerryChip }

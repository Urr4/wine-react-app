import React, {Component} from 'react'
import {Chip, Avatar, FontIcon} from 'material-ui'

class BerrySelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      berry: props.berry
    }

    this.selected = this.selected.bind(this)
  }

  selected() {
    alert('Clicked')
  }

  render() {
    return (
      <Chip
        onClick={this.selected}
        backgroundColor={'#1dae41'}
        labelColor={'#ffffff'}
      >
        <Avatar
          icon={<FontIcon className="fab fa-pagelines"></FontIcon>}
          color={'#1DAE41'}
          backgroundColor={'#ffffff'}
        />
        {this.state.berry.name}
      </Chip>
    )
  }
}

export {BerrySelectable}

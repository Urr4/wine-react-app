import React, { Component } from 'react'
import { Chip, Avatar, FontIcon } from 'material-ui'
import PropTypes from 'prop-types'

class UserChip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
    }

    this.onClick = props.onClick

    if (!this.onClick) {
      this.onClick = () => {}
    }
  }

  render() {
    return (
      <Chip onClick={this.onClick}>
        <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
        {this.state.user.name}
      </Chip>
    )
  }
}

UserChip.propType = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

export default UserChip

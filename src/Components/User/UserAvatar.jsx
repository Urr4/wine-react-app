import React, {Component} from 'react'
import {Avatar, ListItem} from 'material-ui';
import PropTypes from "prop-types";

class UserAvatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      color: '#808080',
    }
    this.getContent = this.getContent.bind(this)
  }

  getContent() {
    return this.state.user.name.charAt(0).toUpperCase()
  }

  render() {
    return (
      <ListItem
        onClick={this.toggle}
        leftAvatar={<Avatar backgroundColor={this.state.color}>{this.getContent()}</Avatar>}
        primaryText={this.state.user.name}
      />
    )
  }
}

UserAvatar.propType = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired
}

export default UserAvatar;

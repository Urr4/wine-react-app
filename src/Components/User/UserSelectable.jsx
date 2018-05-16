import React, {Component} from 'react'
import {Chip, Avatar, FontIcon} from 'material-ui';
import PropTypes from "prop-types";

class UserSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
    }

    this.selected = this.selected.bind(this)
  }

  selected(){
    alert('Clicked')
  }

  render() {
    return (
      <Chip
        onClick={this.selected}
      >
        <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
        {this.state.user.name}
      </Chip>
    )
  }
}

UserSelectable.propType = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired
}

export default UserSelectable;

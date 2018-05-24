import React, { Component } from 'react'
import UserChip from '../Components/User/UserChip'
import { List, ListItem } from 'material-ui'

class UserView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: props.users,
    }
  }

  render() {
    return (
      <List>
        {this.state.users.map(user => (
          <ListItem key={'UserView/' + user.id} disableTouchRipple={true}>
            <UserChip user={user} />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default UserView

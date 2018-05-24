import React, { Component } from 'react'
import UserSelectable from '../Components/User/UserSelectable'
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
            <UserSelectable user={user} />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default UserView

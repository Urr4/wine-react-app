import React, { Component } from 'react'
import UserChip from '../Components/User/UserChip'
import { Dialog, FlatButton, List, ListItem } from 'material-ui'
import WineView from './WineView'

class UserView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: props.users,
      currentUser: false,
    }
  }

  voidCurrentUser() {
    return () =>
      this.setState({
        currentUser: false,
      })
  }

  setCurrentUser(user) {
    return () =>
      this.setState({
        currentUser: user,
      })
  }

  render() {
    const addWineAction = [<FlatButton label="+" primary onClick={() => alert('Click')} />]

    return (
      <div style={{ display: 'flex' }}>
        <Dialog
          title={'Weine von ' + this.state.currentUser.name}
          actions={addWineAction}
          modal={false}
          open={!!this.state.currentUser}
          autoDetectWindowHeight
          autoScrollBodyContent
          onRequestClose={this.voidCurrentUser()}
        >
          <WineView
            wines={this.state.currentUser.likedWines}
            isDeletable={false}
            isEditable={false}
          />
        </Dialog>

        <List>
          {this.state.users.map(user => (
            <ListItem key={'UserView/' + user.id} disableTouchRipple>
              <UserChip user={user} onClick={this.setCurrentUser(user)} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default UserView

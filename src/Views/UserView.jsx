import React, { Component } from 'react'
import UserChip from '../Components/User/UserChip'
import { Dialog, FlatButton, List, ListItem, TextField } from 'material-ui'
import WineView from './WineView'
import { UserResource } from '../Utils/resources/userResource'

class UserView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      filteredUsers: [],
      currentUser: false,
      isLoading: false,
    }
    this.filterUsers = this.filterUsers.bind(this)
  }

  componentDidMount() {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        UserResource.getAllUsers()
          .then(users => {
            this.setState({
              users: users.sort(),
              filteredUsers: users.sort(),
              isLoading: false,
            })
          })
          .catch(() => {
            this.setState({
              users: [],
              filteredUsers: [],
              isLoading: false,
            })
          })
      }
    )
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

  filterUsers(event) {
    this.setState({
      filteredUsers: this.state.users.filter(user =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    })
  }

  render() {
    const addWineAction = [<FlatButton label="+" primary onClick={() => alert('Click')} />]

    return (
      <div>
        {this.state.isLoading && <span>Loading</span>}
        <div>
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

          <div style={{ margin: 'auto', width: '50%' }}>
            <TextField
              id="UserView.TextField.Search"
              onChange={this.filterUsers}
              floatingLabelText="Suchen"
              fullWidth
            />
          </div>
          <div style={{ display: 'flex' }}>
            <List>
              {this.state.filteredUsers.map(user => (
                <ListItem key={'UserView/' + user.id} disableTouchRipple>
                  <UserChip user={user} onClick={this.setCurrentUser(user)} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default UserView

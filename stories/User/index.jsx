import React from 'react'
import UserAvatar from "../../src/Components/User/UserAvatar";
import user from "./fixtures/user.json"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default storiesOf =>
  storiesOf('Components/User', module)
    .add('UserAvatar', () => (
      <MuiThemeProvider>
        <UserAvatar
          user={user}
        />
      </MuiThemeProvider>
    ))

import React from 'react'
import UserChip from "../../src/Components/User/UserChip";
import user from "./fixtures/user.json"
import users from "./fixtures/users.json"
import {MuiThemeProviderDecorator} from "../decorators";
import UserView from "../../src/Views/UserView";

export default storiesOf =>
  storiesOf('Components/User', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('UserChip', () => (
        <UserChip
          user={user}
          onClick={()=>alert('Clicked')}
        />
    ))

    .add('UserView', () => (
      <UserView
        users={users}
      />
    ))

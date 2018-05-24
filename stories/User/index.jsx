import React from 'react'
import UserSelectable from "../../src/Components/User/UserSelectable";
import user from "./fixtures/user.json"
import users from "./fixtures/users.json"
import {MuiThemeProviderDecorator} from "../decorators";
import UserView from "../../src/Views/UserView";

export default storiesOf =>
  storiesOf('Components/User', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('UserSelectable', () => (
        <UserSelectable
          user={user}
          onClick={()=>alert('Clicked')}
        />
    ))

    .add('UserView', () => (
      <UserView
        users={users}
      />
    ))

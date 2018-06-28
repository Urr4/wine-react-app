import React from 'react'
import UserChip from "../../src/Components/User/UserChip";
import user from "./fixtures/user.json"
import users from "./fixtures/users.json"
import {MuiThemeProviderDecorator} from "../decorators";
import UserView from "../../src/Views/UserView";
import { action} from '@storybook/addon-actions';

export default storiesOf =>
  storiesOf('Components/User', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('UserChip', () => (
        <UserChip
          user={user}
          onClick={action('UserChip clicked')}
        />
    ))

    .add('UserView', () => (
      <UserView
        users={users}
      />
    ))

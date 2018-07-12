import React from 'react'
import UserChip from "../../src/Components/User/UserChip";
import user from "./fixtures/user.json"
import {MuiThemeProviderDecorator} from "../decorators";
import {action} from '@storybook/addon-actions';

export default storiesOf =>
  storiesOf('Components/User', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('UserChip', () => (
      <UserChip
        user={user}
        onClick={action('UserChip clicked')}
      />
    ))

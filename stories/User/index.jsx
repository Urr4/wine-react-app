import React from 'react'
import UserAvatar from "../../src/Components/User/UserAvatar";
import user from "./fixtures/user.json"
import {MuiThemeProviderDecorator} from "../decorators";

export default storiesOf =>
  storiesOf('Components/User', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('UserAvatar', () => (
        <UserAvatar
          user={user}
        />
    ))

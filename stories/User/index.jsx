import React from 'react'
import UserSelectable from "../../src/Components/User/UserSelectable";
import user from "./fixtures/user.json"
import {MuiThemeProviderDecorator} from "../decorators";

export default storiesOf =>
  storiesOf('Components/User', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('UserSelectable', () => (
        <UserSelectable
          user={user}
        />
    ))

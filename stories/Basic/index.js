import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";

export default storiesOf =>
  storiesOf('Components/Basic', module)
    .addDecorator(MuiThemeProviderDecorator)

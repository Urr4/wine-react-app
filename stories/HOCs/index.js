import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";
import {withSubmit} from "../../src/Components/HOC/withSubmit";


export default storiesOf =>
  storiesOf('Components/HOCs', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('withSubmit', () => (
      withSubmit(null, () => (alert('Clicked')))
    ))

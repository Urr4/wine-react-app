import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators";
import {OrderSelectable} from "../../src/Components/Order/OrderSelectable";

export default storiesOf =>
  storiesOf('Components/Order', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('OrderSelectable', () => (
      <OrderSelectable></OrderSelectable>
    ))

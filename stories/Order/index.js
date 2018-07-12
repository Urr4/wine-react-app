import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators"
import {OrderSelectable} from "../../src/Components/Order/OrderSelectable"
import order from './fixtures/order.json'

export default storiesOf =>
  storiesOf('Components/Order', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('OrderSelectable', () => (
      <OrderSelectable order={order}></OrderSelectable>
    ))


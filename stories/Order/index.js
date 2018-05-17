import React from 'react'
import {MuiThemeProviderDecorator} from "../decorators"
import {OrderSelectable} from "../../src/Components/Order/OrderSelectable"
import order from './fixtures/order.json'
import orders from './fixtures/orders.json'
import OrderView from "../../src/Views/OrderView";

export default storiesOf =>
  storiesOf('Components/Order', module)
    .addDecorator(MuiThemeProviderDecorator)
    .add('OrderSelectable', () => (
      <OrderSelectable order={order}></OrderSelectable>
    ))

    .add("OrderView", () => (
      <OrderView orders={orders}/>
    ))

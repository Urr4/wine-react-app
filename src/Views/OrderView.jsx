import React, { Component } from 'react'
import { List, ListItem } from 'material-ui'
import { OrderSelectable } from '../Components/Order/OrderSelectable'

class OrderView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: props.orders,
    }
  }

  render() {
    return (
      <List>
        {this.state.orders.map(order => (
          <ListItem key={'OrderView/' + order.id} disableTouchRipple={true}>
            <OrderSelectable order={order} />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default OrderView

import React, { Component } from 'react'
import { List, ListItem } from 'material-ui'
import { OrderSelectable } from '../Components/Order/OrderSelectable'
import { OrderResource } from '../Utils/resources/orderResource'

class OrderView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        OrderResource.getAllOrders()
          .then(orders => {
            this.setState({
              orders: orders.sort(),
              isLoading: false,
            })
          })
          .catch(() => {
            this.setState({
              isLoading: false,
              orders: [],
            })
          })
      }
    )
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <span>Loading</span>}
        <div>
          <List>
            {this.state.orders.map(order => (
              <ListItem key={'OrderView/' + order.id} disableTouchRipple>
                <OrderSelectable order={order} />
              </ListItem>
            ))}
          </List>
          {this.state.orders.length === 0 && <span>Keine Bestellungen gefunden</span>}
        </div>
      </div>
    )
  }
}

export default OrderView

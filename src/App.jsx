import React, { Component } from 'react'
import {
  BottomNavigation,
  BottomNavigationItem,
  FontIcon,
  MuiThemeProvider,
  Paper,
} from 'material-ui'
import SellerView from './Views/SellerView'
import WineView from './Views/WineView'
import OrderView from './Views/OrderView'
import UserView from './Views/UserView'

import sellers from '../stories/Seller/fixtures/sellers.json'
import users from '../stories/User/fixtures/users.json'
import orders from '../stories/Order/fixtures/orders.json'
import wines from '../stories/Wine/fixtures/wines.json'

const userIcon = <FontIcon className="material-icons">face</FontIcon>
const sellerIcon = <FontIcon className="material-icons">group</FontIcon>
const orderIcon = <FontIcon className="material-icons">local_atm</FontIcon>
const wineIcon = <FontIcon className="material-icons">local_bar</FontIcon>

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  select(index) {
    return () => {
      this.setState({ selectedIndex: index })
    }
  }

  render() {
    let embedded
    switch (this.state.selectedIndex) {
      case 0:
        embedded = <SellerView sellers={sellers} />
        break
      case 1:
        embedded = <WineView wines={wines} />
        break
      case 2:
        embedded = <UserView users={users} />
        break
      case 3:
        embedded = <OrderView orders={orders} />
        break
      default:
        embedded = <SellerView sellers={sellers} />
    }

    return (
      <MuiThemeProvider>
        <div>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem label="Winzer" icon={sellerIcon} onClick={this.select(0)} />
              <BottomNavigationItem label="Weine" icon={wineIcon} onClick={this.select(1)} />
              <BottomNavigationItem label="Personen" icon={userIcon} onClick={this.select(2)} />
              <BottomNavigationItem
                label="Bestellungen"
                icon={orderIcon}
                onClick={this.select(3)}
              />
            </BottomNavigation>
          </Paper>
          {embedded}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

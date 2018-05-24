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
    this.setState({ selectedIndex: index })
  }

  render() {
    let embedded
    switch (this.state.selectedIndex) {
      case 0:
        embedded = <SellerView />
        break
      case 1:
        embedded = <WineView />
        break
      case 2:
        embedded = <UserView />
        break
      case 3:
        embedded = <OrderView />
        break
      default:
        embedded = <SellerView />
    }

    return (
      <MuiThemeProvider>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem label="Winzer" icon={sellerIcon} onClick={() => this.select(0)} />
            <BottomNavigationItem label="Weine" icon={wineIcon} onClick={() => this.select(1)} />
            <BottomNavigationItem label="Personen" icon={userIcon} onClick={() => this.select(2)} />
            <BottomNavigationItem
              label="Bestellungen"
              icon={orderIcon}
              onClick={() => this.select(3)}
            />
          </BottomNavigation>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App

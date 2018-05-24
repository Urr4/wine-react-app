import React, {Component} from 'react'
import {List, ListItem} from "material-ui";
import WineCounter from "./WineCounter";

class WineCounterList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: !!props.wines ? props.wines : []
    }
  }

  render() {
    return (
      <List>
        {this.state.wines.map(wine => (
          <ListItem
            key={'WineCounterList/' + wine.id}
            disableTouchRipple={true}>
            <WineCounter wine={wine}/>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default WineCounterList

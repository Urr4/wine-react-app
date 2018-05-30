import React, { Component } from 'react'
import { List, ListItem } from 'material-ui'
import { WineSelectable } from '../Components/Wine/WineSelectable'
import WineForm from '../Components/Wine/WineForm'

class WineView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: props.wines,
      isWineDeletable: props.isWineDeletable,
      isWineEditable: props.isWineEditable,
    }
  }

  render() {
    return (
      <List>
        {this.state.wines.map(wine => (
          <ListItem key={'WineView/' + wine.id} disableTouchRipple={true}>
            <WineSelectable wine={wine} isDeletable={this.state.isWineDeletable}>
              {this.state.isWineEditable && <WineForm wine={wine} />}
            </WineSelectable>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default WineView

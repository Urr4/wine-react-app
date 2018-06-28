import React, { Component } from 'react'
import { List, ListItem, Dialog, FlatButton } from 'material-ui'
import { WineSelectable } from '../Components/Wine/WineSelectable'
import WineForm from '../Components/Wine/WineForm'

class WineView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: props.wines,
      isWineDeletable: props.wineDeletable,
      isWineEditable: props.wineEditable,
      currentWine: false,
    }
  }

  voidCurrentWine() {
    return () =>
      this.setState({
        currentWine: false,
      })
  }

  setCurrentWine(wine) {
    return () =>
      this.setState({
        currentWine: wine,
      })
  }

  render() {
    const addUserAction = [<FlatButton label="+" primary onClick={() => alert('Click')} />]

    return (
      <div style={{ display: 'flex' }}>
        <Dialog
          title={this.state.currentWine.name}
          actions={addUserAction}
          modal={false}
          open={!!this.state.currentWine}
          autoDetectWindowHeight
          autoScrollBodyContent
          onRequestClose={this.voidCurrentWine()}
        >
          <p>Test</p>
        </Dialog>

        <List>
          {this.state.wines.map(wine => (
            <ListItem
              key={'WineView/' + wine.id}
              disableTouchRipple
              onClick={this.setCurrentWine(wine)}
            >
              <WineSelectable wine={wine} isDeletable={this.state.isWineDeletable}>
                {this.state.isWineEditable && <WineForm wine={wine} />}
              </WineSelectable>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default WineView

import React, { Component } from 'react'
import { Dialog, List, ListItem, TextField } from 'material-ui'
import { WineSelectable } from '../Components/Wine/WineSelectable'
import WineForm from '../Components/Wine/WineForm'

class WineView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: props.wines,
      filteredWines: props.wines,
      currentWine: false,
    }
    this.filterWines = this.filterWines.bind(this)
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

  filterWines(event) {
    this.setState({
      filteredWines: this.state.wines.filter(wine =>
        wine.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    })
  }

  render() {
    return (
      <div>
        <div style={{ margin: 'auto', width: '50%' }}>
          <TextField
            id="WineView.TextField.Search"
            onChange={this.filterWines}
            floatingLabelText="Suchen"
            fullWidth
          />
        </div>
        <Dialog
          title={this.state.currentWine.name}
          modal={false}
          open={!!this.state.currentWine}
          autoDetectWindowHeight
          autoScrollBodyContent
          onRequestClose={this.voidCurrentWine()}
        >
          <WineForm wine={this.state.currentWine} />
        </Dialog>

        <div style={{ margin: 'auto', width: '90%', textAlign: 'center', display: 'flex' }}>
          <List>
            {this.state.filteredWines.filter(wine => wine.color === 'WHITE').map(wine => (
              <ListItem
                key={'WineView/' + wine.id}
                disableTouchRipple
                onClick={this.setCurrentWine(wine)}
              >
                <WineSelectable wine={wine} />
              </ListItem>
            ))}
          </List>

          <List>
            {this.state.filteredWines.filter(wine => wine.color === 'RED').map(wine => (
              <ListItem
                key={'WineView/' + wine.id}
                disableTouchRipple
                onClick={this.setCurrentWine(wine)}
              >
                <WineSelectable wine={wine} />
              </ListItem>
            ))}
          </List>

          <List>
            {this.state.filteredWines.filter(wine => wine.color === 'ROSE').map(wine => (
              <ListItem
                key={'WineView/' + wine.id}
                disableTouchRipple
                onClick={this.setCurrentWine(wine)}
              >
                <WineSelectable wine={wine} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    )
  }
}

export default WineView

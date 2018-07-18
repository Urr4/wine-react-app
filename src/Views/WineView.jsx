import React, { Component } from 'react'
import { Dialog, List, ListItem, TextField } from 'material-ui'
import { WineSelectable } from '../Components/Wine/WineSelectable'
import WineForm from '../Components/Wine/WineForm'
import { WineResource } from '../Utils/resources/wineResource'

class WineView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: [],
      filteredWines: [],
      currentWine: false,
      isLoading: false,
    }
    this.filterWines = this.filterWines.bind(this)
  }

  componentDidMount() {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        WineResource.getAllWines()
          .then(wines => {
            this.setState({
              wines: wines.sort(),
              filteredWines: wines.sort(),
              isLoading: false,
            })
          })
          .catch(() => {
            this.setState({
              wines: [],
              filteredWines: [],
              isLoading: false,
            })
          })
      }
    )
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
        {this.state.isLoading && <span>Loading</span>}
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
              {this.state.filteredWines.filter(wine => wine.colors.includes('Whitewine')).map(wine => (
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
              {this.state.filteredWines.filter(wine => wine.colors.includes('Redwine')).map(wine => (
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
              {this.state.filteredWines.filter(wine => wine.colors.includes('Rosewine')).map(wine => (
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
      </div>
    )
  }
}

export default WineView

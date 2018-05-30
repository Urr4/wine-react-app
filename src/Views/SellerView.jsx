import React, { Component } from 'react'
import { SellerSelectable } from '../Components/Seller/SellerSelectable'
import { Dialog, Divider, FlatButton, List, ListItem, Paper } from 'material-ui'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { SellerForm } from '../Components/Seller/SellerForm'
import WineView from './WineView'
import WineCounterList from '../Components/Wine/WineCounterList'
import WineForm from '../Components/Wine/WineForm'
import config from '../config/config.json'

class SellerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sellers: props.sellers,
      editSeller: false,
      orderSeller: false,
      isAddWineOpen: false,
    }

    this.style = {
      height: '100%',
      width: '100%',
      margin: '10px',
      display: 'inline-block',
    }

    this.switchEditSeller = this.switchEditSeller.bind(this)
    this.switchOrderSeller = this.switchOrderSeller.bind(this)
    this.switchAddWine = this.switchAddWine.bind(this)
  }

  onSellerClick(seller) {
    return () => {
      this.setState(oldState => ({
        selectedSeller: seller,
      }))
    }
  }

  switchEditSeller(seller) {
    if (!!this.editSeller) {
      return () => {
        this.setState(() => ({
          editSeller: false,
        }))
      }
    } else {
      return () => {
        this.setState(() => ({
          editSeller: seller,
        }))
      }
    }
  }

  switchOrderSeller(seller) {
    if (!!this.orderSeller) {
      return () => {
        this.setState(() => ({
          orderSeller: false,
        }))
      }
    } else {
      return () => {
        this.setState(() => ({
          orderSeller: seller,
        }))
      }
    }
  }

  switchAddWine() {
    this.setState(() => ({
      isAddWineOpen: !this.isAddWineOpen,
    }))
  }

  render() {
    const markers = []
    let center = [52.527404, 13.380759]
    if (!!this.state.selectedSeller) {
      markers.push({
        position: {
          lat: this.state.selectedSeller.lat,
          lng: this.state.selectedSeller.lng,
        },
        content: this.state.selectedSeller.name,
      })
      center = [this.state.selectedSeller.lat, this.state.selectedSeller.lng]
    }

    const editActions = [
      <FlatButton label="Speichern" primary onClick={() => ({})} />,
      <FlatButton label="Abbrechen" secondary onClick={this.switchEditSeller()} />,
    ]
    const orderActions = [
      <FlatButton label="Bestellen" primary={true} onClick={() => ({})} />,
      <FlatButton label="Abbrechen" secondary onClick={this.switchOrderSeller()} />,
    ]
    const addActions = [
      <FlatButton label="Speichern" primary={true} onClick={() => ({})} />,
      <FlatButton label="Abbrechen" secondary onClick={this.switchAddWine} />,
    ]

    return (
      <div style={{ display: 'flex' }}>
        <Dialog
          title={'Editiere ' + this.state.editSeller.name}
          actions={editActions}
          modal={false}
          open={!!this.state.editSeller}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          onRequestClose={this.switchEditSeller()}
        >
          <SellerForm seller={this.state.editSeller} />
          <Divider />
          <WineView
            wines={this.state.editSeller.wines}
            isWineDeletable={true}
            isWineEditable={true}
          />
          <FlatButton primary={true} label="Wein hinzufügen" onClick={this.switchAddWine} />
        </Dialog>

        <Dialog
          title={'Bestellen bei ' + this.state.orderSeller.name}
          actions={orderActions}
          modal={false}
          open={!!this.state.orderSeller}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          onRequestClose={this.switchOrderSeller()}
        >
          <WineCounterList wines={this.state.orderSeller.wines} />
        </Dialog>

        <Dialog
          title={'Wein hinzufügen'}
          actions={addActions}
          modal={false}
          open={!!this.state.isAddWineOpen}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          onRequestClose={this.switchAddWine}
        >
          <WineForm isSaveable={false} />
        </Dialog>

        <Paper style={this.style}>
          <List>
            {this.state.sellers.map(seller => (
              <ListItem
                key={'SellerView/' + seller.id}
                disableTouchRipple={true}
                onClick={this.onSellerClick(seller)}
              >
                <SellerSelectable seller={seller} />
                <FlatButton onClick={this.switchEditSeller(seller)} label="Edit" />
                <FlatButton onClick={this.switchOrderSeller(seller)} label="Order" />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper style={this.style}>
          <Map center={center} zoom={13} className="map__reactleaflet">
            <TileLayer
              url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}"
              id="mapbox.satellite"
              token={config.mapbox_token}
            />
            <div style={{ height: 500 }}>
              {markers.map((marker, index) => (
                <Marker position={marker.position} key={`marker_${index}`}>
                  <Popup>
                    <span>{marker.content}</span>
                  </Popup>
                </Marker>
              ))}
            </div>
          </Map>
        </Paper>
      </div>
    )
  }
}

export default SellerView

import React, { Component } from 'react'
import { SellerSelectable } from '../Components/Seller/SellerSelectable'
import { Dialog, Divider, FlatButton, List, ListItem, Paper } from 'material-ui'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { SellerForm } from '../Components/Seller/SellerForm'
import WineView from './WineView'
import WineCounterList from '../Components/Wine/WineCounterList'
import WineForm from '../Components/Wine/WineForm'
import config from '../config/config.json'
import { SellerResource } from '../Utils/resources/sellerResource'

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

    this.switchAddWine = this.switchAddWine.bind(this)
  }

  onSellerClick(seller) {
    return () => {
      this.setState({
        selectedSeller: seller,
      })
    }
  }

  setEditSeller(seller) {
    return () => {
      this.setState(() => ({
        editSeller: seller,
      }))
    }
  }

  voidEditSeller() {
    return () => {
      this.setState(() => ({
        editSeller: false,
      }))
    }
  }

  voidOrderSeller() {
    return () => {
      this.setState(() => ({
        orderSeller: false,
      }))
    }
  }

  setOrderSeller(seller) {
    return () => {
      this.setState(() => ({
        orderSeller: seller,
      }))
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
    if (this.state.selectedSeller) {
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
      <FlatButton
        label="Speichern"
        primary
        onClick={SellerResource.updateSeller(this.state.editSeller)}
      />,
      <FlatButton label="Abbrechen" secondary onClick={this.voidEditSeller()} />,
    ]
    const orderActions = [
      <FlatButton label="Bestellen" primary onClick={() => ({})} />,
      <FlatButton label="Abbrechen" secondary onClick={this.voidOrderSeller()} />,
    ]
    const addActions = [
      <FlatButton label="Speichern" primary onClick={() => ({})} />,
      <FlatButton label="Abbrechen" secondary onClick={this.switchAddWine} />,
    ]

    return (
      <div style={{ display: 'flex' }}>
        <Dialog
          title={'Editiere ' + this.state.editSeller.name}
          actions={editActions}
          modal={false}
          open={!!this.state.editSeller}
          autoDetectWindowHeight
          autoScrollBodyContent
          onRequestClose={this.voidEditSeller()}
        >
          <SellerForm seller={this.state.editSeller} />
          <Divider />
          /* TODO dont use WineView, use List of augmented WineSelectables instead */
          <WineView wines={this.state.editSeller.wines} wineDeletable wineEditable />
          <FlatButton primary label="Wein hinzufügen" onClick={this.switchAddWine} />
        </Dialog>

        <Dialog
          title={'Bestellen bei ' + this.state.orderSeller.name}
          actions={orderActions}
          modal={false}
          open={!!this.state.orderSeller}
          autoScrollBodyContent
          autoDetectWindowHeight
          onRequestClose={this.voidOrderSeller()}
        >
          <WineCounterList wines={this.state.orderSeller.wines} />
        </Dialog>

        <Dialog
          title={'Wein hinzufügen'}
          actions={addActions}
          modal={false}
          open={!!this.state.isAddWineOpen}
          autoScrollBodyContent
          autoDetectWindowHeight
          onRequestClose={this.switchAddWine}
        >
          <WineForm isSaveable={false} />
        </Dialog>

        <Paper style={this.style}>
          <List>
            {this.state.sellers.map(seller => (
              <ListItem
                key={'SellerView/' + seller.id}
                disableTouchRipple
                onClick={this.onSellerClick(seller)}
              >
                <SellerSelectable seller={seller} />
                <FlatButton onClick={this.setEditSeller(seller)} label="Edit" />
                <FlatButton onClick={this.setOrderSeller(seller)} label="Order" />
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

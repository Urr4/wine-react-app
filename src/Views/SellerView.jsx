import React, { Component } from 'react'
import { SellerSelectable } from '../Components/Seller/SellerSelectable'
import { Dialog, FlatButton, List, ListItem, Paper } from 'material-ui'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { SellerForm } from '../Components/Seller/SellerForm'
import WineView from './WineView'
import WineCounterList from '../Components/Wine/WineCounterList'

class SellerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sellers: props.sellers,
      editSeller: false,
      orderSeller: false,
    }

    this.style = {
      height: '100%',
      width: '100%',
      margin: '10px',
      display: 'inline-block',
    }
  }

  onSellerClick(seller) {
    return () => {
      this.setState(oldState => ({
        selectedSeller: seller,
      }))
    }
  }

  openSellerForm(seller) {
    return () => {
      this.setState(oldState => ({
        editSeller: seller,
      }))
    }
  }

  openOrderForm(seller) {
    return () => {
      this.setState(oldState => ({
        orderSeller: seller,
      }))
    }
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
      <FlatButton label="Bestellen" primary={true} onClick={() => ({})} />,
      <FlatButton label="Abbrechen" primary={true} keyboardFocused={true} onClick={() => ({})} />,
    ]
    const orderActions = [
      <FlatButton label="Bestellen" primary={true} onClick={() => ({})} />,
      <FlatButton label="Abbrechen" primary={true} keyboardFocused={true} onClick={() => ({})} />,
    ]

    return (
      <div style={{ display: 'flex' }}>
        <Dialog
          title={'Editiere ' + this.state.editSeller.name}
          actions={editActions}
          modal={false}
          open={!!this.state.editSeller}
          autoScrollBodyContent={true}
          onRequestClose={() => ({
            //TODO
          })}
        >
          <SellerForm seller={this.state.editSeller} />
          <WineView wines={this.state.editSeller.wines} />
        </Dialog>

        <Dialog
          title={'Bestellen bei ' + this.state.orderSeller.name}
          actions={orderActions}
          modal={false}
          open={!!this.state.orderSeller}
          autoScrollBodyContent={true}
          onRequestClose={() => ({
            //TODO
          })}
        >
          <WineCounterList wines={this.state.orderSeller.wines} />
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
                <FlatButton onClick={this.openSellerForm(seller)}>Edit</FlatButton>
                <FlatButton onClick={this.openOrderForm(seller)}>Order</FlatButton>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper style={this.style}>
          <Map center={center} zoom={13} className="map__reactleaflet">
            <TileLayer
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
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

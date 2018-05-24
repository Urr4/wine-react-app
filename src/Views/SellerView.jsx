import React, {Component} from 'react'
import {SellerSelectable} from '../Components/Seller/SellerSelectable'
import {List, ListItem, Paper} from 'material-ui'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

class SellerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sellers: props.sellers,
    }

    this.style = {
      height: "100%",
      width: "100%",
      margin: "10px",
      display: "inline-block"
    }
  }

  mouseOver(seller) {
    return () => {
      this.setState(oldState => ({
          selectedSeller: seller
        })
      , ()=>console.log(this.state))
    }
  }

  render() {
    const markers = []
    let center = [52.527404, 13.380759]
    if (!!this.state.selectedSeller) {
      markers.push({
        position: {
          lat: this.state.selectedSeller.lat,
          lng: this.state.selectedSeller.lng
        },
        content: this.state.selectedSeller.name
      })
      center = [this.state.selectedSeller.lat, this.state.selectedSeller.lng]
    }
    console.log(markers, center)
    return (
      <div style={{display: "flex"}}>
        <Paper style={this.style}>
          <List>
            {this.state.sellers.map(seller => (
              <ListItem key={'SellerView/' + seller.id} disableTouchRipple={true} onClick={this.mouseOver(seller)}>
                <SellerSelectable seller={seller}/>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper style={this.style}>
          <Map center={center} zoom={16} className="map__reactleaflet">
            <TileLayer
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <div style={{height: 500}}>
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

import React, {Component} from 'react'
import {Card, CardHeader, CardText, CardTitle, Divider} from 'material-ui'
import {WineSelectable} from "../Wine/WineSelectable";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

class SellerSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: props.seller
    }
  }

  getColor() {
    if (this.state.seller.isActive) {
      return '#FFFFFF'
    } else {
      return '#bbbbbb'
    }
  }

  render() {
    return (
      <Card>
        <CardTitle
          title={this.state.seller.name}
          subtitle={this.state.seller.email}
          actAsExpander={true}
          showExpandableButton={true}
          style={{"backgroundColor": this.getColor()}}
        ></CardTitle>
        <Divider/>
        <CardText expandable={true}>
          {this.state.seller.wines.map(wine => (
            <WineSelectable
              key={"SellerSelectable/" + wine.id}
              wine={wine}
            />
          ))}
          {this.props.children}
        </CardText>
        <Divider/>
        <CardText
          expandable={true}
        >
          <div className="map">
            <Map center={[this.state.seller.lat, this.state.seller.lng]} zoom={14} className="map__reactleaflet">
              <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
              />
              <div style={{"height": 400}}>
                <Marker position={[this.state.seller.lat, this.state.seller.lng]}
                        key={`marker_${this.state.seller.id}`}>
                  <Popup>
                    <span>{"hi"}</span>
                  </Popup>
                </Marker>
              </div>
            </Map>
          </div>
        </CardText>
      </Card>
    )
  }
}

export {SellerSelectable}

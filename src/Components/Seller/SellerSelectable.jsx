import React, {Component} from 'react'
import {Card, CardHeader, CardText, CardTitle, Divider} from 'material-ui'
import {WineSelectable} from "../Wine/WineSelectable";
import {Map, TileLayer} from 'react-leaflet'

class SellerSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: props.seller
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
        ></CardTitle>
        <Divider/>
        <CardText expandable={true}>
          {this.state.seller.wines.map(wine => (
            <WineSelectable
              key={"SellerSelectable/" + wine.id}
              wine={wine}
            />
          ))}
        </CardText>
        <Divider/>
        <CardText
          expandable={true}
        >
          <div className="map">
            <Map center={[52.499040, 13.418392]} zoom={8} className="map__reactleaflet">
              <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
              />
              <div style={{"height":300}}></div>
            </Map>
          </div>
        </CardText>
      </Card>
    )
  }
}

export {SellerSelectable}

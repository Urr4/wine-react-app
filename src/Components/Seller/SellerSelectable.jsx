import React, {Component} from 'react'
import {Card, CardHeader, CardTitle, CardText, Divider} from 'material-ui'
import {WineSelectable} from "../Wine/WineSelectable";

class SellerSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: props.seller
    }
  }

  render(){
    return (
      <Card>
        <CardTitle
          title={this.state.seller.name}
          subtitle={this.state.seller.email}
          actAsExpander={true}
        ></CardTitle>
        <Divider/>
        <CardText expandable={true}>
          {this.state.seller.wines.map(wine => (
            <WineSelectable wine={wine}/>
          ))}
        </CardText>
        <Divider/>
        <CardHeader
          title={this.state.seller.address}
          expandable={true}
        ></CardHeader>
      </Card>
    )
  }
}

export {SellerSelectable}

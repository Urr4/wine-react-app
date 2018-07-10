import React, { Component } from 'react'
import { Card, CardText, CardTitle } from 'material-ui'
import { WineSelectable } from '../Wine/WineSelectable'

class SellerSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: props.seller,
    }
  }

  render() {
    return (
      <Card>
        <CardTitle
          title={this.state.seller.name}
          subtitle={this.state.seller.email}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {this.state.seller.wines.map(wine => (
            <WineSelectable key={'SellerSelectable/' + wine.id} wine={wine} />
          ))}
          {this.props.children}
        </CardText>
      </Card>
    )
  }
}

export { SellerSelectable }

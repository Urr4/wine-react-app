import React, { Component } from 'react'
import { Card, CardText, CardTitle, CardActions, Divider } from 'material-ui'
import { WineSelectable } from '../Wine/WineSelectable'

class SellerSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: props.seller,
      actions: props.actions,
      isWineDeletable: props.isWineDeletable,
      isWineEditable: props.isWineEditable
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
          style={{ backgroundColor: this.getColor() }}
        />
        <Divider />
        <CardText expandable={true}>
          {this.state.seller.wines.map(wine => (
            <WineSelectable key={'SellerSelectable/' + wine.id} wine={wine} isDeletable={this.state.isWineDeletable} />
          ))}
          {this.props.children}
        </CardText>
        <CardActions expandable={!!this.state.actions}>{this.state.actions}</CardActions>
      </Card>
    )
  }
}

export { SellerSelectable }

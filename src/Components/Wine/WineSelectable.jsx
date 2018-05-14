import React, {Component} from 'react'
import PropTypes from "prop-types";
import {Card, CardHeader, CardText} from 'material-ui';

class WineSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: props.wine
    }

    this.getColor = this.getColor.bind(this)
    this.wineToString = this.wineToString.bind(this)
  }

  getColor() {
    switch (this.state.wine.color) {
      case "RED":
        return '#cc0044'
      case "WHITE":
        return '#fffd33'
      case "ROSE":
        return '#ff00aa'
      default:
        return '#808080'
    }
  }

  wineToString() {
    const wine = this.state.wine
    return wine.restSugar + ' RZ ' + wine.acid + ' S ' + wine.alcohol + '%  -  ' + wine.price + '€/' + wine.bottleSize + 'l'
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.state.wine.name}
                    subtitle={this.wineToString()}
                    actAsExpander={!!this.props.children}
                    showExpandableButton={!!this.props.children}
                    titleColor={this.getColor()}
        >
        </CardHeader>
        <CardText expandable={true}>
          {this.props.children}
        </CardText>
      </Card>
    )
  }
}

WineSelectable.propTypes = {
  wine: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    alcohol: PropTypes.number,
    acid: PropTypes.number,
    restSugar: PropTypes.number,
    bottleSize: PropTypes.number,
    price: PropTypes.number,
    color: PropTypes.string.isRequired
  }).isRequired
}

export {WineSelectable}

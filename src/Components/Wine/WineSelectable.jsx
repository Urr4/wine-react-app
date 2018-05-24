import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText } from 'material-ui'
import { getHexColor } from '../../Utils/wineUtil'
import { BerryChip } from '../Berry/BerryChip'

class WineSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: props.wine,
    }

    this.wineToString = this.wineToString.bind(this)
  }

  wineToString() {
    const wine = this.state.wine
    return (
      wine.restSugar +
      ' RZ ' +
      wine.acid +
      ' S ' +
      wine.alcohol +
      '%  -  ' +
      wine.price +
      '€/' +
      wine.bottleSize +
      'l'
    )
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.state.wine.name}
          subtitle={this.wineToString()}
          actAsExpander={!!this.props.children}
          showExpandableButton={!!this.props.children}
          titleColor={getHexColor(this.state.wine.color)}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {this.state.wine.berries.map(berry => (
              <BerryChip berry={berry} key={'WineSelectable/' + berry.id} />
            ))}
          </div>
        </CardHeader>
        <CardText expandable={true}>{this.props.children}</CardText>
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
    color: PropTypes.string.isRequired,
  }).isRequired,
}

export { WineSelectable }

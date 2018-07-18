import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText} from 'material-ui'
import {getHexColor} from '../../Utils/wineUtil'
import {BerryChip} from '../Berry/BerryChip'

class WineSelectable extends PureComponent {
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
      (wine.restSugar || 'Unbekannt ') +
      ' RZ ' +
      (wine.acid || 'Unbekannt ') +
      ' S ' +
      (wine.alcohol || 'Unbekannt ') +
      '%  -  ' +
      (wine.price || 'Unbekannt ') +
      '€/' +
      (wine.bottleSize || 'Unbekannt ') +
      'l'
    )
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.state.wine.name}
            subtitle={this.wineToString()}
            actAsExpander={!!this.props.children}
            showExpandableButton={!!this.props.children}
            titleColor={getHexColor(this.state.wine.colors)}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {this.state.wine.berries.map(berry => (
                <BerryChip berry={berry} key={'WineSelectable/' + berry.id}/>
              ))}
            </div>
          </CardHeader>
          <CardText expandable>{this.props.children}</CardText>
        </Card>
      </div>
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

export {WineSelectable}

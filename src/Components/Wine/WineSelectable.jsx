import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, Dialog, FlatButton } from 'material-ui'
import { getHexColor } from '../../Utils/wineUtil'
import { BerryChip } from '../Berry/BerryChip'
import { WineResource } from '../../Utils/resources/wineResource'

class WineSelectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: props.wine,
      isDeletable: !!props.isDeletable ? props.isDeletable : false,
      deleteConfirmationOpened: false,
    }

    this.wineToString = this.wineToString.bind(this)
    this.switchDeleteConfirmation = this.switchDeleteConfirmation.bind(this)
    this.deleteWineConfirmed = this.deleteWineConfirmed.bind(this)
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

  switchDeleteConfirmation() {
    this.setState(() => ({
      deleteConfirmationOpened: !this.state.deleteConfirmationOpened,
    }))
  }

  deleteWineConfirmed() {
    WineResource.deactivateWine(this.state.wine.id).then(() => this.switchDeleteConfirmation())
  }

  render() {
    return (
      <div>
        <Dialog
          modal={false}
          open={this.state.deleteConfirmationOpened}
          actions={[
            <FlatButton label="Ja" secondary={true} onClick={this.deleteWineConfirmed} />,
            <FlatButton label="Nein" secondary={true} onClick={this.switchDeleteConfirmation} />,
          ]}
          onRequestClose={this.switchDeleteConfirmation}
        >
          <p>Wein {this.state.wine.name} wirklich löschen?</p>
        </Dialog>

        <Card>
          <CardHeader
            title={this.state.wine.name}
            subtitle={this.wineToString()}
            actAsExpander={!!this.props.children}
            showExpandableButton={!!this.props.children}
            titleColor={getHexColor(this.state.wine.color)}
          >
            {this.state.isDeletable && (
              <FlatButton
                secondary={true}
                label="Löschen"
                onClick={this.switchDeleteConfirmation}
              />
            )}
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

export { WineSelectable }

import React, { Component } from 'react'
import { TextField, FlatButton } from 'material-ui'
import PropTypes from 'prop-types'

class WineForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: props.wine,
      isSaveable: props.isSaveable
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <TextField
          id={this.state.wine.id + '/name'}
          floatingLabelText="Name"
          defaultValue={this.state.wine.name}
          fullWidth={true}
        />
        <br />
        <TextField
          id={this.state.wine.id + '/restSugar'}
          floatingLabelText="Restzucker"
          defaultValue={this.state.wine.restSugar}
        />
        <TextField
          id={this.state.wine.id + '/acid'}
          floatingLabelText="Säure"
          defaultValue={this.state.wine.acid}
        />
        <TextField
          id={this.state.wine.id + '/alcohol'}
          floatingLabelText="Alkohol"
          defaultValue={this.state.wine.alcohol}
        />
        <br />
        <TextField
          id={this.state.wine.id + '/bottleSize'}
          floatingLabelText="Flaschengröße"
          defaultValue={this.state.wine.bottleSize}
        />
        <TextField
          id={this.state.wine.id + '/price'}
          floatingLabelText="Preis"
          defaultValue={this.state.wine.price}
        />
        <br />
        {this.state.isSaveable && <FlatButton primary label="Save"/>}
      </div>
    )
  }
}

WineForm.defaultProps = {
  wine: {
    name: '',
    alcohol: 0,
    acid: 0,
    restSugar: 0,
    bottleSize: 0,
    price: 0,
    color: ''
  },
  isSaveable: true
}

WineForm.propTypes = {
  wine: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    alcohol: PropTypes.number,
    acid: PropTypes.number,
    restSugar: PropTypes.number,
    bottleSize: PropTypes.number,
    price: PropTypes.number,
    color: PropTypes.string,
  }),
  isSaveable: PropTypes.bool
}

export default WineForm

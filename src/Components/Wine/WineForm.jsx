import React, { PureComponent } from 'react'
import { TextField } from 'material-ui'

class WineForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      wine: props.wine,
    }
  }

  render() {
    return (
      <div>
        <TextField
          id={this.state.wine.id + '/name'}
          floatingLabelText="Name"
          defaultValue={this.state.wine.name}
          fullWidth
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
    color: '',
  },
}

export default WineForm

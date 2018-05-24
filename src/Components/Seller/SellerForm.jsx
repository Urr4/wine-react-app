import React, { Component } from 'react'
import { TextField, FlatButton } from 'material-ui'
import PropTypes from 'prop-types'

class SellerForm extends Component {
  constructor(props) {
    super(props)
    this.state = { seller: props.seller }
  }

  render() {
    return (
      <div>
        <TextField
          id={this.state.seller.id + '/name'}
          floatingLabelText="Name"
          defaultValue={this.state.seller.name}
          fullWidth={true}
        />
        <br />
        <TextField
          id={this.state.seller.id + '/address'}
          floatingLabelText="Adresse"
          defaultValue={this.state.seller.address}
          fullWidth={true}
        />
        <br />
        <TextField
          id={this.state.seller.id + '/email'}
          floatingLabelText="Email"
          defaultValue={this.state.seller.email}
          fullWidth={true}
        />
        <br />
        <FlatButton primary={true}>Save</FlatButton>
      </div>
    )
  }
}
export { SellerForm }

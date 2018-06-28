import React, { Component } from 'react'
import { TextField, FlatButton } from 'material-ui'

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
          fullWidth
        />
        <br />
        <TextField
          id={this.state.seller.id + '/address'}
          floatingLabelText="Adresse"
          defaultValue={this.state.seller.address}
          fullWidth
        />
        <br />
        <TextField
          id={this.state.seller.id + '/email'}
          floatingLabelText="Email"
          defaultValue={this.state.seller.email}
          fullWidth
        />
        <br />
        <FlatButton primary>Save</FlatButton>
      </div>
    )
  }
}
export { SellerForm }

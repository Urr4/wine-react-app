import React, { Component } from 'react'
import { WineSelectable } from './WineSelectable'
import { TextField } from 'material-ui'

class WineCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wine: props.wine,
    }
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <WineSelectable wine={this.state.wine} />
        <TextField
          type="number"
          defaultValue={0}
          style={{ margin: 20 }}
          floatingLabelText={'Anzahl von ' + this.state.wine.name}
        />
      </div>
    )
  }
}

export default WineCounter

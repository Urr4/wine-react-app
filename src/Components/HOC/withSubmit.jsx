import React from 'react'

import { FlatButton } from 'material-ui'

function withSubmit(WrappedComponent, onSubmit) {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = onSubmit
    }

    render() {
      return (
        <div>
          <FlatButton onClick={this.onSubmit} label="Submit"/>
        </div>
      )
    }
  }
}

export { withSubmit }

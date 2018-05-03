import React, { Component } from 'react'

class Text extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: props.content,
    }
  }

  render() {
    return <p>{this.state.content}</p>
  }
}

export default Text

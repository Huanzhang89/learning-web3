import React, { Component, Fragment } from 'react'

export default class BlockItem extends Component {

  render() {
    const { number } = this.props
    console.log(this.props)
    return (
      <div>
        <div>{number}</div>
      </div>
    )
  }
}

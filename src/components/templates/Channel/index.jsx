import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello man</h1>
        <h2>this room is { this.props.match.params.id }</h2>
      </div>
    )
  }
}
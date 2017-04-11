import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Subroute extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello man</h1>
          <Link to='/posts/yeon'>yeon</Link>
          <Link to='/posts/gyu'>gyu</Link>
          <Link to='/posts/min'>min</Link>
          <Route
            path='/posts/:title'
            component={Post}
          />
        </div>
      </Router>
    )
  }
}

class Post extends Component {
  render() {
    return (
      <h2>{this.props.match.params.title}</h2>
    )
  }
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/templates/Home';
import Channel from './components/templates/Channel';
import Stat from './components/templates/Stat';
import Header from './components/organisms/Header';
import Subroute from './components/templates/Subroute';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header
            title='Tetris Battle'
            link='/'
          />
          <div id='content-wrapper'>
            <Route exact path='/' component={Home} />
            <Route path='/subroute' component={Subroute} />
            <Route path='/channel/:id' component={Channel} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Activities from './Activities';
import Panel from './Panel';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Panel></Panel>
        <Activities load="portfolio"></Activities>
      </div>
    );
  }
}

export default Dashboard;

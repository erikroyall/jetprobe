import React, { Component } from 'react';
import Activities from './Activities';
import Panel from './Panel';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Activities active="portfolio"></Activities>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import ActivityMenu from './ActivityMenu';
import ActivityInfo from './ActivityInfo';
import Sidebar from './Sidebar';

class Activities extends Component {
  render() {
    return (
      <div>
        <div>
          <ActivityMenu active="portfolio"></ActivityMenu>
          <ActivityInfo type="portfolio"></ActivityInfo>
        </div>
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default Activities;

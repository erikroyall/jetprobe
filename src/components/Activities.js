import React, { Component } from 'react';
import ActivityMenu from './ActivityMenu';
import ActivityInfo from './ActivityInfo';
import Sidebar from './Sidebar';

class Activities extends Component {
  render() {
    return (
      <div className="activities">
        <div class="main-panel">
          <h1>Activities</h1>
          <ActivityMenu active={this.props.active}></ActivityMenu>
          <ActivityInfo active={this.props.active}></ActivityInfo>
        </div>
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default Activities;

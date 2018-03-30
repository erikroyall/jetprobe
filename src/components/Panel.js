import React, { Component } from 'react';
import portrait from '../portrait.jpg';

class MainMenu extends Component {
  render() {
    const menuItems = [
      { icon: 'home'},
      { icon: 'dashboard'},
      { icon: 'cast'},
      { icon: 'folder_open'}
    ];

    return (
      <div className="main-menu">
        <ul className="main-menu-list">
          {menuItems.map(({icon}, id) => {
            if (icon.toLowerCase() === this.props.active) {
              return <li key={id} className="active"><i className="material-icons">{icon}</i></li>
            }
            return <li key={id}><i className="material-icons">{icon}</i></li>
          })}
        </ul>
      </div>
    );
  }
}

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="switcher">
          <i className="material-icons">menu</i>
        </div>
        <div className="rest">
          <UserInfo name="Cameron Svensson" imgurl={portrait}></UserInfo>
        </div>
      </div>
    );
  }
}

class Panel extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MainMenu active={this.props.active}></MainMenu>
      </div>
    );
  }
}

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <div className="user-info-content">
          <span style={{ backgroundImage: `url(${this.props.imgurl}` }} className="user-info-image"></span>
          <span className="user-info-name">{this.props.name}</span>
          <span className="user-info-drop"><i className="material-icons">arrow_drop_down</i></span>
        </div>
      </div>
    )
  }
}

export default Panel;

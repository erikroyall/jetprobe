import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Funds left="23,685" deposit="10,000" growth="+5.2"/>
      </div>
    );
  }
}

class Funds extends Component {
  render() {
    return (
      <div className="funds">
        <div className="funds-info">
          <div className="funds-info-left">
            <span className="funds-left">{this.props.left}</span><br/>
            <span className="funds-deposit">${this.props.deposit}</span>
          </div>
          <div className="funds-info-right">
            <span className="funds-growth">{this.props.growth}%</span>
          </div>
        </div>
        <div className="funds-add">
          <button className="funds-add-button">
            <span className="funds-button-text">Add funds</span>
            <span className="funds-button-icon">
              <i className="material-icons funds-button-arrow">arrow_forward</i>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
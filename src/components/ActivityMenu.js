import React, { Component } from 'react';

class ActivityMenu extends Component {
  render() {
    const data = ["Portfolio", "Operations", "Fees", "Others"];

    return (
      <div className="activity-menu">
        <ul>
          {data.map((o, key) => {
            if (this.props.active === o.toLowerCase()) {
              return <li className="activity-menu-item" data-is-active>{o}</li>
            }
            return <li className="activity-menu-item">{o}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default ActivityMenu;

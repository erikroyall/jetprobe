import React, { Component } from 'react';

class ActivityInfo extends Component {
  render() {
    const data = [
      ["Distribution", "10 Mar 2017", "45"],
      ["Rellocation", "08 Mar 2017", "27"],
      ["Other", "01 Mar 2017", "33"],
      ["Distribution", "25 Feb 2017", "22"],
      ["Distribution", "17 Feb 2017", "78"],
      ["Rellocation", "02 Mar 2017", "22"],
      ["Distribution", "10 Mar 2017", "45"],
      ["Other", "01 Mar 2017", "33"]
    ];

    return (
      <table className="activity-info">
        <thead className="activity-info-head">
          <th className="activity-info-data-icon"></th>
          <th className="activity-info-data-type">Type<i class="material-icons">&#xE5C5;</i></th>
          <th className="activity-info-data-date">Date<i class="material-icons">&#xE5C5;</i></th>
          <th className="activity-info-data-value">Value<i class="material-icons">&#xE5C5;</i></th>
        </thead>
        {data.map((o, key) => {
          return <PortfolioItem key={key} data={{
            type: o[0],
            date: o[1],
            value: o[2]
          }}></PortfolioItem>
        })}
      </table>
    );
  }
}

class PortfolioItem extends Component {
  render() {
    return (
      <tr class="activity-info-row">
        <td class="activity-info-data activity-info-data-icon">
          <span className="activity-info-data-icon-text" data-color={this.props.data.type[0]}>
            {this.props.data.type[0]}
          </span>
        </td>
        <td class="activity-info-data activity-info-data-type">{this.props.data.type}</td>
        <td class="activity-info-data activity-info-data-date">{this.props.data.date}</td>
        <td class="activity-info-data activity-info-data-value">{this.props.data.value}</td>
      </tr>
    );
  }
}

export default ActivityInfo;

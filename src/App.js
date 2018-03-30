import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Panel active="dashboard"></Panel>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;

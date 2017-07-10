import React, { Component } from 'react';
import JSXIntro from './JSXIntro';
import ComponentsIntro from './ComponentsIntro';
import PropsIntro from './PropsIntro';
import StateIntro from './State'
import ChildComponentIntro from './ChildComponentIntro';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
          <JSXIntro />
          <ComponentsIntro/>
          <PropsIntro name="OkGo" title="Here it goes again"/>
          <StateIntro />
          <ChildComponentIntro />
      </div>

    );
  }
}

export default App;

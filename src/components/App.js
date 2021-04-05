import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculatate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total = null,
      total = null,
      operation = null,
    }
  }
  render() {
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  }
}

export default { App };

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
import Calculatate from '../logic/calculatate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const result = Calculatate({ total, next, operation }, buttonName);
    this.setState({ total: result.total, next: result.next, operation: result.operation });
  }

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculatate';

class App extends React.Component {

  handleClick = (buttonName) => {
    const {total, next, operation} = this.state;
    const result = Calculate({ total, next, operation }, buttonName);
    this.setState({ total: result.total, next: result.next, operation: result.operation });
  }

  render() {
    <div className="App">
      <Display />
      <ButtonPanel />
      <ButtonPanel clickHandler = {this.handleClick} />
    </div>
  }
}

export default { App }

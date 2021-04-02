import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculatate';

const App = () => (
  <div className="App">
    {/* <h1>the simple calculator</h1> */}
    <Display />
    <ButtonPanel />
  </div>
);

export default App;

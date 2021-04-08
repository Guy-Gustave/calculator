import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
import Calculatate from '../logic/calculatate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const { total, next, operation } = state;
    const data = { total, next, operation };
    const result = Calculatate(data, buttonName);
    setState({ total: result.total, next: result.next, operation: result.operation });
  };

  const { total, next } = state;
  return (
    <div className="App">
      <Display result={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;

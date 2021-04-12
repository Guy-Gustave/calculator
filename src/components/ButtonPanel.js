/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Button from './Button';
import '../index.css';

export default function ButtonPanel({ clickHandler }) {
  const Group1 = ['AC', '+/-', '%', '÷'];
  const Group2 = ['7', '8', '9', 'x'];
  const Group3 = ['4', '5', '6', '-'];
  const Group4 = ['1', '2', '3', '+'];
  const Group5 = ['0', '.', '='];
  const rightButton = ['÷', 'x', '-', '+', '='];

  const Groups = [Group1, Group2, Group3, Group4, Group5];

  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <div className="calcul">
      {Groups.map((group) => (
        <div className="group" key={group}>
          {group.map((char) => (
            <Button key={char} buttonName={`${char}`} color={!rightButton.includes(char)} wide={char === '0'} clickHandler={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

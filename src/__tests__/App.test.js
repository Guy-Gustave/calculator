import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import '../index.css';
import Calculatate from '../logic/calculatate';
import NavBar from '../components/NavBar';


it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <Display  />
        <ButtonPanel  />
      </BrowserRouter>
    </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

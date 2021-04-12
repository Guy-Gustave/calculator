import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="quote">
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <h3>
          Mathematics is not about numbers, equations, computations,
          or algorithms: it is about understanding. –William Paul Thurston
        </h3>,
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

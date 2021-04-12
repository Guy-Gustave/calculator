/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="home">
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <h1>Math Magicians</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur, quis delectus. Aliquid qui recusandae, maiores tempora
          perspiciatis officiis nobis reprehenderit blanditiis dolor, iure ad
          odit rem iusto, natus necessitatibus perferendis unde veritatis
          consequatur assumenda quo cumque atque ratione alias? Vero molestias
          facere animi dolores pariatur debitis quos at consectetur laudantium,
          similique, itaque, nesciunt veritatis ex?
        </p>
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

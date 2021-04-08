/* eslint-disable */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';

const Affiche = () => {
  return (
    <div className="">
      <h2>calculator</h2>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Quote} />
          {/* <Route component = {NotFound} />  */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Affiche;

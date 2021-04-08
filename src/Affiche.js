/* eslint-disable */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import App from './components/App';

const Affiche = () => {
  return (
    <div className="">
      {/* <h2>calculator</h2> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/App" exact component={App} />
          <Route path="/Quote" exact component={Quote} />
          {/* <Route component = {NotFound} />  */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Affiche;

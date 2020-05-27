import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Main';
import Product from './pages/Product';


export default function Routes() {
  return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:newEnd" component={Product} />
      </Switch>
   );
}
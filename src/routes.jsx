import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Index from './pages';
import Feature from './pages/Features';

const routes = [
  {
    path: '/',
    component: Index,
    name: 'Home',
  },
  {
    path: '/feature',
    component: Feature,
    name: 'Feature',
  },
];

const Routes = () => (
  <BrowserRouter>
    <Header title="Pitang 2" routes={routes} />
    <Switch>
      {routes.map(({ component, path }) => (
        <Route
          exact
          key={path}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
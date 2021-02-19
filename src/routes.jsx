import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages';
import Header from './components/Header';
import Feature from './pages/Features';
import TodoList from './pages/Todos';
import TodoInfo from './pages/Todo';

const routes = [
  {
    path: '/',
    component: Index,
    name: 'Home',
  },
  {
    path: '/todo',
    component: TodoList,
    name: 'Todo',
  },
  {
    path: '/todo/:id',
    component: TodoInfo,
    name: 'Todo',
    notShow: true,
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
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;

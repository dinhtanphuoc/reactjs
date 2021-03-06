import React from 'react';
import PropTypes from 'prop-types'
import DevTools from './DevTools';
import { RenderRoutes } from '../routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store, routes, history }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Route history={history}>
            <RenderRoutes routes={routes} />
        </Route>
      </BrowserRouter>
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default Root;

import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './home/home';

const Router = () => {
  return (
    <Switch>
      <Route component={Home} />
    </Switch>
  );
};

export default withRouter(Router);

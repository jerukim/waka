import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './home/home';
import Tutorial from './tutorial';

const Router = () => {
  return (
    <Switch>
      <Route path="/tutorial" component={Tutorial} />
      {/* <Route path="/contact" component={Contact} />
      <Route path="/auth" component={Auth} /> */}
      <Route component={Home} />
    </Switch>
  );
};

export default withRouter(Router);

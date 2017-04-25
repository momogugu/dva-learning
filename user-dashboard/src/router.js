import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from './routes/IndexPage';

import Users from "./routes/Users";

import A from "./routes/A.js";

import B from "./routes/B.js";

import C from "./routes/C.js";

import D from "./routes/D.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
      <Route path="/c" component={C} />
      <Route path="*" component={D} />
    </Router>
  );
}

export default RouterConfig;

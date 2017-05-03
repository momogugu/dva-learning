import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from './routes/Index/IndexPage';

import Users from "./routes/Users/Users";

import A from "./routes/A/A.js";

import B from "./routes/B/B.js";

import C from "./routes/C/C.js";

import D from "./routes/D/D.js";

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

import * as React from 'react';
import { render } from 'react-dom';
import { Top } from './pages/Top/Top';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Index: React.FunctionComponent = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Top} />
    </Switch>
  </BrowserRouter>
)

render(<Index />, document.getElementById('root'));

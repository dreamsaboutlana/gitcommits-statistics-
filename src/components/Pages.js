import { Route, Switch } from 'react-router-dom';
import Content from '../containers/Content';

export const Pages = () => (
  <Switch>
    <Route path="/:author" exact component={Content} />
  </Switch>
);

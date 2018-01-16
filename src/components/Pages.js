import { Route, Switch } from 'react-router-dom';
import Content from '../containers/Content';


export const Pages = () => (
  <Switch>
    <Route path="/:repo/:author" exact component={Content} />
    <Route path="/:repo" exact component={Content} />
  </Switch>
);

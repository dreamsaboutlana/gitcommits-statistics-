import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from './Main';
import { SideBar } from './Sidebar';
import { Content, Content2, Content3 } from './Content';


export const Pages = () => (
  <Switch>
    {/*<Route path="/" exact component={Main} />*/}
    <Route path="/content" exact component={Content} />
    <Route path="/content2" exact component={Content2} />
    <Route path="/content3" exact component={Content3} />
    <Route path="/home" exact component={SideBar} />
    <Redirect from="/" to="/content" />
  </Switch>
);

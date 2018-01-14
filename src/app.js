import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Main } from './component/Main';
import './app.scss';

ReactDom.render(
  <BrowserRouter>
     <Main />
  </BrowserRouter>, document.getElementById('app'));

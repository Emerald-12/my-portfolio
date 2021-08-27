import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import App from './App';
import {SidebarProvider} from './SidebarContext'

ReactDOM.render(
      <SidebarProvider>
        <Router basename='/my-portfolio'>
          <App />
        </Router>
      </SidebarProvider>,
  document.getElementById('root')
);

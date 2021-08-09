import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import {SidebarProvider} from './SidebarContext'

ReactDOM.render(
    <Router>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Router>,
  document.getElementById('root')
);

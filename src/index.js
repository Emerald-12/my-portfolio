import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {SidebarProvider} from './SidebarContext'

ReactDOM.render(
      <SidebarProvider>
        <App />
      </SidebarProvider>,
  document.getElementById('root')
);

import React, {Suspense } from "react"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from './SidebarContext'
// import {BrowserRouter as Router, Route, Switch, useLocation, Link} from 'react-router-dom'
// import {TransitionGroup, CSSTransition} from 'react-transition-group'

import Nav from './Components/Nav'
import Projects from './Components/Projects'


import './App.css'
import './Style.css'
function App() {
  const sidebar = useSidebar()
  
  // const location = useLocation()

  return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Router basename='/my-portfolio'>
          <Nav />
          <div className={ sidebar ? 'contentAfter' : 'contentBefore' }>
            <Switch>
              <Route path ='/projects'  component={Projects}/>
            </Switch>
          </div>
        </Router>
      </Suspense>
  );
}

export default App;
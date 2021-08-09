import React, { setState, useEffect, Suspense } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import './App.css'
import './Style.css'

import Nav from './Components/Nav.js'
import Projects from './Components/Projects.js'


import {useSidebar} from './SidebarContext'
// import {BrowserRouter as Router, Route, Switch, useLocation, Link} from 'react-router-dom'
// import {TransitionGroup, CSSTransition} from 'react-transition-group'

 
function App() {
  const sidebar = useSidebar()
  
  // const location = useLocation()

  return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Router basename='/my-portfolio'>
            <div>
              <Nav />
            </div>
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

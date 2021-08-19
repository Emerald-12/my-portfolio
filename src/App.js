import React, {Suspense } from "react"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from './SidebarContext'
import styled from 'styled-components'

import NavComp from './Components/NavComp'
import Projects from './Components/Projects'

import './App.css'
import './Style.css'
const Nav = styled(NavComp)`
  position: absolute;
  top:0;
  text-align: center;
  width: 20%;
  left:40%;
  transition: all 1s;
  height:100vh;
`



function App() {
  const sidebar = useSidebar()
  
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
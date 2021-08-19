import React, {Suspense } from "react"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from './SidebarContext'
import styled, {ThemeProvider} from "styled-components";

import NavComp from './Components/NavComp'
import Projects from './Components/Projects'
import GlobalStyles from "./GlobalStyles";

const ContentContainer = styled.div`
  position: absolute;
  transition: all 1s;
  display:flex;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  left: ${props => props.theme.left};
  padding: ${props => props.theme.padding};
  top: ${props => props.theme.top}

`

function App() {
  const sidebar = useSidebar()
  const theme = sidebar ? 
  {
    left:'20%',
    width:'75vw',
    height:'85vh',
    padding:'3% 0',
    top:'50%'
  } : 

   {
    left:'100%',
    width:'0',
    height:'0',
    padding:'0',
    top:'0'
  };

  
  return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Router basename='/my-portfolio'>
          <GlobalStyles/>
            <NavComp/>
            <ThemeProvider theme={theme}>
              <div style={{position:'relative'}}>
                <ContentContainer>
                  <Switch>
                    <Route path ='/projects'  component={Projects}/>
                  </Switch>
                </ContentContainer>
              </div>
            </ThemeProvider>
        </Router>
      </Suspense>
  );
}

export default App;
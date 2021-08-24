// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from './SidebarContext';
import styled, {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";

import NavComp from './Components/NavComp';
import Projects from './Components/Projects';
import About from './Components/About'

const ContentContainer = styled.div`
  position: absolute;
  transition: all 0.75s;
  width:85%;
  height: 100vh;
  left: ${props => props.theme.left};
  padding: '0';
  top: ${props => props.theme.top};
  border-left: 2px solid black;
  opacity:${props=>props.theme.opacity};
  background: linear-gradient(to bottom right, rgba(60,0,150,1) 0%,rgba(0,220,255,1)  100%);
  /* background-color:#777777; */
  `

function App() {
  
  const sidebar = useSidebar()
  const theme = sidebar ? 
  {
    left:'15%',
    opacity:'1'
  } : 

   {
    left:'100%',
    opacity:'0'
  };
  
  return (
        <Router basename='/my-portfolio'>
          <GlobalStyles/>
            <NavComp/>
            
            <ThemeProvider theme={theme}>
              <div style={{position:'relative'}}>
                <ContentContainer>
                  <Switch>
  
                    <Route path ='/projects'>
                      <Projects />
                    </Route>
  
                    <Route path = '/about'>
                      <About />
                    </Route>

                  </Switch>
                </ContentContainer>
              </div>
            </ThemeProvider>

        </Router>
  );
}

export default App;
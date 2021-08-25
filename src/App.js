// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from './SidebarContext';
import styled, {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";

import NavComp from './Components/NavComp';
import Projects from './Components/Projects';
import About from './Components/About'
import Footer from './Components/Footer'

const ContentContainer = styled.div`
  position: absolute;
  transition: all 1s;
  width:85%;
  height: calc(100vh - 2.5rem - 3px);
  left: ${props => props.theme.left};
  padding: 0;
  top: 0;
  border-left: 3px solid silver;
  border-bottom:${props=>props.theme.borderBottom};
  opacity:${props=>props.theme.opacity};
  background: linear-gradient(to bottom right, rgba(60,0,150,1) 0%,rgba(0,220,255,1)  100%);
  /* background-color:#777777; */
  `
 

function App() {
  
  const sidebar = useSidebar()
  const theme = sidebar ? 
  {
    left:'300px',
    opacity:'1',
    borderBottom:'3px solid silver'
  } : 

   {
    left:'100%',
    opacity:'0',
    borderBottom:'0'
  };
  
  return (
        <Router basename='/my-portfolio'>
          <GlobalStyles/>
            <NavComp/>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
            <Footer />
        </Router>
  );
}

export default App;
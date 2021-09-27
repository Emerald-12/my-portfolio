import NavComp from './NavComp';
import Projects from './Projects';
import About from './About'
import Footer from './Footer'
import Contact from './Contact';
// eslint-disable-next-line
import { HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from '../SidebarContext';
import styled, {ThemeProvider} from "styled-components";

const FooterWrapper = styled.div`
  position: absolute;
  bottom:0;
  width:100%;
  padding-bottom:1px;
`
const ContentContainer = styled.div`
  position: absolute;
  transition: all 1s;
  width:stretch;
  max-width: calc(100vw - 300px);
  height: calc(100vh - 2.5rem - 3px);
  left: ${props => props.theme.left};
  padding: 0;
  top: 0;
  border-left: 3px solid silver;
  border-bottom: 3px solid silver;
  opacity:${props=>props.theme.opacity};
  background: linear-gradient(to bottom right, rgba(23,23,23,1) 0%, rgba(100,100,100,1) 125%);
  /* background-color:#777777; */
  `
  


export default function Home() {
  const sidebar = useSidebar()
  const theme = sidebar ? 
  {
    left:'300px',
    opacity:'1',
  } : 

   {
    left:'100%',
    opacity:'0',
  };
  
    return(
        <div>
            <Router >
                <NavComp />
                <ThemeProvider theme={theme}>
                <Switch >
                    <ContentContainer>
                    <Route  path ='/projects' component= {Projects}/>
                    <Route  path = '/about' component = {About}/>
                    <Route  path = '/contact' component = {Contact} />
                    </ContentContainer>
                </Switch>
                </ThemeProvider>
                
            </Router>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </div>
    )
}
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';

import { useSidebar } from '../SidebarContext';

import Title from './Title'
import image from '../Media/Me.jpg'
import Footer from './Footer'
import ButtonList from './ButtonList'



export default function MobileHome() {
    const HomeContainer = styled.div`
    position: relative;
    display: grid; 
        grid-template-columns: 1fr; 
        grid-template-rows: 2fr 1fr min-content; 
        gap: 0px 0px; 
        grid-template-areas: 
            "picture"
            "title"
            "footer"; 
    height:100vh;
`

    const Img = styled.img`
    width: 250px;
    border-radius: 100%;
    grid-area:picture;
    justify-self:center;
`

const StyledTitle = styled(Title)`
    grid-area:title;
`

const ButtonOverlay = styled.div`
    position:absolute;
    transition: all 1s;
    height: 100%;
    background-color: black;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    left:50%;
    top:50%;
`

const sidebar = useSidebar()
  const theme = sidebar ? 
  {
    opacity:'1',
  } : 

   {
    left:'100%',
  };
    return (
        <Router exact path='my-portfolio/m/'>
            <HomeContainer>

                <ThemeProvider theme={theme}>
                    <ButtonOverlay>
                        <ButtonList mobile={true}/>
                    </ButtonOverlay>
                </ThemeProvider>
                <Img src = {image} alt='' />
                <StyledTitle />
                <Footer />
            </HomeContainer>
        </Router>
    )
}
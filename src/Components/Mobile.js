// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';

import Title from './Title'
import image from '../Media/Me.jpg'
import Footer from './Footer'
import MobileNav from './MobileNav';
import Hamburger from './Hamburger'




const HomeContainer = styled.div`
position: relative;
display: grid; 
height:100vh;
    grid-template-columns: 1fr; 
    grid-template-rows: 2fr 1fr min-content; 
    gap: 0px 0px; 
    grid-template-areas: 
        "picture"
        "title"
        "footer"; 
`

const Img = styled.img`
width: 250px;
border-radius: 100%;
grid-area:picture;
justify-self:center;
align-self: center;
`

const StyledTitle = styled(Title)`
grid-area:title;
`


export default function MobileHome() {

    return (
        <Router exact path='my-portfolio/m/' basename='my-portfolio'>
            <HomeContainer>
                <Hamburger />
                <MobileNav />
                <Img src = {image} alt='' />
                <StyledTitle />
                <Footer />
            </HomeContainer>
        </Router>
    )
}
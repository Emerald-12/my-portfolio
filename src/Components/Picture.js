import image from '../Media/Me.jpg'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import {NavLink, useLocation, useHistory} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import React, { useEffect, useCallback} from 'react'


const Img = styled.img`
    /* min-width: 5rem; */
    width: 250px;
    margin: 1.5rem;
    border-radius: 100%;
    align-items: center;
    z-index:-1;
`
const Link = styled(NavLink)`
  text-decoration:none;
   & a{
       display:none;
   }
  `

const Container = styled.div`
    position: relative;
    
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 250px;
    width: 250px;
    opacity:0;
    transition: .5s ease;
    background-color: #aaa9ad99;
    border-radius: 100%;
    margin: 1.5rem;
    z-index:1;

    :hover {
        opacity:${props=>props.theme.opacity};
        /* pointer-events:none; */
        user-select:none;
        cursor:default;
        left:0;
    }
`
const HomeText = styled.text`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    font-size: 32px;
    color:#171717;
`


function Picture() {
    
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);

    const [useCurrentTheme, setCurrentTheme] = React.useState({})
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()

    function clicky(){
        if (location.pathname !== '/') {handleOnClick()};
        if(sidebar) { toggleSidebar(false) }
    }

    const themeOn = {opacity: '1'} 
    const themeOff = {opacity:'0'}

        let location = useLocation();
        useEffect(() => {
            console.log(location.pathname)
          if (location.pathname === '/') {
              console.log(useCurrentTheme)
              setCurrentTheme(themeOff)}
              if(location.pathname !=='/') {
                  setCurrentTheme(themeOn)
                console.log('kuk')
                console.log(useCurrentTheme)}
              // eslint-disable-next-line
            }, [location]);
   
    return (
        <ThemeProvider theme={useCurrentTheme}>
            <Container>
                    <Img src = {image} alt='' />
                    <Overlay onClick={clicky}>
                        <HomeText>Home</HomeText>
                    </Overlay>
            </Container>
        </ThemeProvider>
    )
}

export default Picture
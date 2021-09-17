import {useEffect, useState} from 'react'
import styled, {ThemeProvider} from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faTimes as Cross } from '@fortawesome/free-solid-svg-icons'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import { useHistory } from 'react-router';

const TitleCont = styled.div`
    position: fixed;
    top:0;
    left:0;
    color:white;
    background: ${props => props.theme.color};
    z-index:1;
    width:100vw;
    `

const Bars = styled(FontAwesomeIcon)`
    margin-right: 25px;
    margin-top:13.75px;
    margin-bottom:13.75px;
    position:fixed;
    top:0;
    right:0;
    color:white;
    z-index:2;
    `

const Title = styled.p`
    text-transform: capitalize;
    margin:25px;
    font-weight: 500;
    font-size:32px;
    position:relative;
    z-index:0;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

const wrapperTheme =
{color:'none'}
const wrapperThemeScrolled = 
{color: '#202020'}


export default function Hamburger() {
    const sidebar = useSidebar()
    const toggleSidebar = useSidebarUpdate()
    document.body.style.overflow = 'unset';

    useEffect(()=> {
        if(sidebar){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    },[sidebar]);
    
    const [theme, setTheme] = useState(wrapperTheme)
    const history = useHistory();
    const  path = (history.location.pathname).replace('/', '')
    console.log(path)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40 ) {
                setTheme(wrapperThemeScrolled)
            }
            if (window.scrollY <= 40 ) {
                setTheme(wrapperTheme)
            }
        });
    }, []);
    
    return (
        <ThemeProvider theme={theme}>
            <TitleCont>
                <Title>
                    {path}
                </Title>
            </TitleCont>
                    <Bars icon={!sidebar ? HB : Cross} size='3x' onClick={toggleSidebar}/>
        </ThemeProvider>
    )
}
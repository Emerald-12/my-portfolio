import {useEffect, useState} from 'react'
import styled, {ThemeProvider} from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faTimes as Cross } from '@fortawesome/free-solid-svg-icons'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import { useHistory } from 'react-router';

const Bars = styled(FontAwesomeIcon)`
    float:right;
    margin-right: 25px;
    margin-top:13.75px;
    margin-bottom:13.75px;
    grid-area: ham;
`

const HamCont = styled.div`
    z-index:1;
    position: fixed;
    top:0;
    right:0;
    color:white;
    width:100vw;
    background: ${props => props.theme.color};

    display: grid;
        grid-template-columns: 300px  2.5rem 2fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "title ham ";
`
const Title = styled.p`
    grid-area: title;
    text-transform: capitalize;
    margin:25px;
    font-weight: 500;
    font-size:32px;
`

const wrapperTheme =
{color:'none'}
const wrapperThemeScrolled = 
{color: '#202020'}


export default function Hamburger() {
    const sidebar = useSidebar()
    const toggeSidebar = useSidebarUpdate()
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
            <HamCont>
                <Title>
                    {path}
                </Title>
                <Bars icon={!sidebar ? HB : Cross} size='3x' onClick={toggeSidebar}/>
            </HamCont>
        </ThemeProvider>
    )
}
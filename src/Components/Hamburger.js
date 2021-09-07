import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faTimes as Cross } from '@fortawesome/free-solid-svg-icons'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'

const Bars = styled(FontAwesomeIcon)`

`

const HamCont = styled.div`
    z-index:1;
    position: fixed;
    top:0;
    right:0;
    color:white;
    margin-right: 25px;
    margin-top:13.75px;
`
export default function Hamburger() {
    const sidebar = useSidebar()
    const toggeSidebar = useSidebarUpdate()

    return (
        <HamCont>
            <Bars icon={!sidebar ? HB : Cross} size='3x' onClick={toggeSidebar}/>
        </HamCont>
    )
}
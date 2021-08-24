// eslint-disable-next-line
import styled, {css} from 'styled-components';
import {useSidebar, useSidebarUpdate} from '../SidebarContext'

export const Button = styled.button`
    background-color: ${props => props.disabled ? "red" : "silver"};
    color: ${props => props.disabled ? "black" : null};
    border: none;
    padding:0;
    margin: 0.5rem auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    width: 100%;
    min-height:100%;
    min-width:200px;
    text-decoration:none;

    

    .active & {
        color:white;
        text-decoration: underline;
        background-color:black;
    }
`


export function MainButton(props) {
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()
    return(
        <Button onClick={!sidebar ? toggleSidebar : undefined}><h1>{props.text}</h1></Button>
        )
    }
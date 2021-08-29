// eslint-disable-next-line
import styled, {css} from 'styled-components';
import {useSidebar, useSidebarUpdate} from '../SidebarContext'

export const Button = styled.button`
    background-color: ${props => props.disabled ? "#d5131e" : "silver"};
    color: ${props => props.disabled ? "black" : null};
    border:${props => props.project ? 'solid black 3px': props.disabled ? 'solid black 1px' :'none'} ;
    /* margin: 0.5rem 1rem; */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    width: 100%;
    min-height:100%;
    min-width:150px;
    text-decoration:none;
    font-size:0.75em;

    .active & {
        color:white;
        text-decoration: underline;
        background-color:black;
        border: 2px solid silver;
    }
`


export function MainButton(props) {
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()
    return(
        <Button onClick={!sidebar && !props.mobile ? toggleSidebar : undefined}><h1>{props.text}</h1></Button>
        )
    }
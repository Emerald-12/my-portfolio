// eslint-disable-next-line
import styled, {css} from 'styled-components';
import {useSidebar, useSidebarUpdate} from '../SidebarContext'

export const Button = styled.button`
    background-color: ${props => props.disabled ? "#d5131e" : "silver"};
    color: ${props => props.disabled ? "black" : null};
    border:${props => props.project ? 'solid black 3px': props.disabled ? 'solid black 1px' :'none'} ;
    margin: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 15px;
    width: 100%;
    height:fit-content;
    padding:5px;
    width:200px;

    text-decoration:none;
    font-size:0.75em;
    @media (max-width: 769px) {
        min-height:100%;
        width:150px;
        min-width:75px;
        max-width:150px;
    }

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
        //enables desired home button function by disabling sidebartoggle when true
        <Button draggable="false" onClick={(!sidebar && !props.mobile) || props.mobile ? toggleSidebar : undefined}><h1>{props.text}</h1></Button>
        )
    }
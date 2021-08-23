import {useEffect, useState} from 'react'
import { useFetch } from 'react-async';
// eslint-disable-next-line
import styled, {css} from 'styled-components';
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import {NavLink} from 'react-router-dom'

export const Button = styled.button`
    background-color: silver;
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

    & :hover{
        text-decoration: underline;
    }

    .active & {
        color:white;
        text-decoration: underline;
        background-color:black;
    }
`
const List = styled.ul`
    grid-area: list;
    margin: auto 1rem;
`
const ListItem = styled.li`
    & :hover {
      background-color:rgba(150, 150, 150);
      border-radius: 15px;
      
      * {
        text-decoration:underline;
      }
    }

    & .active {
      pointer-events:none;
      user-select:none;
      cursor:default;
    }
`
const Link = styled(NavLink)`
  text-decoration:none;
  `

export function MainButton(props) {
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()
    return(
        <Button onClick={!sidebar ? toggleSidebar : undefined}><h1>{props.text}</h1></Button>
        )
    }

export function ProjectList() {
    const ProjectButton = ()=>{
        const {data, error} = useFetch(`https://tomkhcoding.github.io/api/projects.json`, {
            headers: { accept: "application/json" },
          })
        if (error) return error.message
        if (data) return (
            data.slice(0, 5).map(data =>
            <Link  to = {`/${data.path}`}>
                <Button><h1>{`${data.name}`}</h1></Button>
            </Link> )

        )
        return null
        }
    
    return(
        <>
            <List>
                <ListItem>
                    <ProjectButton />
                </ListItem>
            </List>
            
            
        </>
    )
}
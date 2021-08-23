import {useEffect, useState} from 'react'
import { useFetch } from 'react-async';
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
// eslint-disable-next-line
import styled, {css} from 'styled-components';

import {Button} from './ButtonComponents';
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
const Container = styled.div`
    height:90vh;
    width:80vw;
    display: grid; 
        grid-template-columns: 0.25fr 1fr 1fr; 
        grid-template-rows: 2fr 1fr; 
        gap: 15px 15px; 
        grid-template-areas: 
            "list iframe iframe"
            
            "list info1 info2"; 
`

function ProjectList() {

    const sidebar = useSidebar()
    const toggleSidebar = useSidebarUpdate()
    useEffect(()=>{
        if(!sidebar) { toggleSidebar()}
            // eslint-disable-next-line
        },[])

    const Projects = ()=>{
        const {data, error} = useFetch(`https://tomkhcoding.github.io/api/projects.json`, {
            headers: { accept: "application/json" },
          })
        if (error) return error.message
        if (data)  return (
            
            <Router basename='/my-portfolio/projects'>
                <Container>
                    <List>
                        {data.slice(0, 5).map(data =>
                        <ListItem key ={data.id}>
                            <Link  exact to = {`/${data.path}`}>
                                <Button><h1>{`${data.name}`}</h1></Button>
                            </Link>
                        </ListItem>)}
                    </List>
                   <Switch>
                    {data.slice(0, 5).map(data =>
                        <Route  key= {data.id} exact path ={`/${data.path}`}>
                            <iframe style={{gridArea:'iframe'}} src={`${data.url}`} title={`${data.name}`} width='99%' height='100%'></iframe>
                        </Route>
                    )}</Switch>
                </Container>
            </Router>
        )
        return null
        }
    
    return( <Projects />)
}

export default ProjectList
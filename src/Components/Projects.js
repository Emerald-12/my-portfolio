import {useEffect} from 'react'
import { useFetch } from 'react-async';
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
// eslint-disable-next-line
import styled from 'styled-components';

import {Button} from './ButtonComponents';
const List = styled.ul`
    grid-area: list;
    margin: auto 1rem;
`
const ListItem = styled.li`
    padding: 1rem;
    
    & :hover {
      background-color:${props => props.disabled ? "none": "rgba(150, 150, 150)"};
      border-radius: 15px;
      text-decoration: ${props => props.disabled ? "none": "underline"};
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
    /* width:100%; */
    padding-top:1rem;
    margin-right:2rem;
    display: grid; 
        grid-template-columns: 0.25fr 1fr 1fr; 
        grid-template-rows: 2fr 1fr; 
        gap: 15px 15px; 
        grid-template-areas: 
            "list iframe iframe"
            "list info1 info2"; 
`
const Description = styled.div`
font-size:1.25rem;
border-radius:15px;
padding:8px;
color:white;
font-weight:bold;
font-family:Arial;
margin:0;
white-space:pre-wrap;

a{
    color:black;
    transition: all 0.25s;
} a:hover {
    font-size:130%;
    transition: all 0.25s;
}

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
                                <>
                                    {data.state==='disabled' ?
                                    <ListItem disabled key ={data.id}>
                                        <Button disabled><h1>{`${data.name}`}</h1></Button>
                                    </ListItem>
                                    :
                                    <ListItem  key ={data.id}>
                                        <Link  exact to = {`/${data.path}`}>
                                            <Button project><h1>{`${data.name}`}</h1></Button>
                                        </Link>
                                    </ListItem>}
                                </>)}
                    </List>

                   <Switch>
                    {data.slice(0, 5).map(data =>
                        <Route  key= {data.id} exact path ={`/${data.path}`}>
                            
                            <iframe style={{gridArea:'iframe', border:'none', borderRadius:'15px'}} src={`${data.url}`} title={`${data.name}`} width='100%' height='100%'></iframe>

                            <Description style={{gridArea:'info1'}}>
                                <p>{data.description}</p>
                            </Description>
                            
                            <Description style={{gridArea:'info2'}}><p>The Project is available, in it's current state, here:<br/> <br/><a href={`${data.url}`} target='_blank' rel="noreferrer">tomkhcoding.github.io/pokemon-search</a></p></Description>

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
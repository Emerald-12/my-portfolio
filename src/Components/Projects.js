import {useEffect} from 'react'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
// eslint-disable-next-line
import styled, {css} from 'styled-components';

import ProjectDisplay from './ProjectDisplay'
import {ProjectButton} from './ButtonComponents';

const Link = styled(NavLink)`
  text-decoration:none;
  `

const Container = styled.div`
    height:80vh;
    width:80vw;
    background-color: blue;
    display: grid; 
        grid-template-columns: 0.5fr 1.5fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 15px 15px; 
        grid-template-areas: 
            "list iframe iframe"
            "list iframe iframe"
            "list info infos"; 
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

function Projects() {
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()
    
    useEffect(()=>{
        if(!sidebar) { toggleSidebar()}
        // eslint-disable-next-line
    })

    let arr = ['pokemon', 'not pokemon']
    // let projectString = '<{`Project &{num}`} />'


    return (
        <Router basename='/my-portfolio/projects'>
            <Container>
                <List>
                    <ListItem>
                        <Link to = {`/${arr[0]}`}>
                            <ProjectButton text ='Project One' />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <ProjectButton text ='Project Two' />
                    </ListItem>

                    <ListItem>
                        <ProjectButton text ='Project Three' />
                    </ListItem>

                    <ListItem>
                        <ProjectButton text ='Project Four' />
                    </ListItem>

                    <ListItem>
                        <ProjectButton text ='Project Five' />
                    </ListItem>
                </List>

                <Switch>
                    <Route path= {`/${arr[0]}`} component ={ProjectDisplay}/>
                </Switch>
            
            </Container>
        </Router>
    )
}

export default Projects
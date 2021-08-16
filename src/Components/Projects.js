import {useEffect} from 'react'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
// eslint-disable-next-line
import styled, {css} from 'styled-components';

import ProjectDisplay from './ProjectDisplay'
import MainButton from './MainButton';

const Link = styled(NavLink)`
  text-decoration:none;
`


const Container = styled.div`
    background-color: blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    `
const List = styled.ul`
    grid-area: 1 / 1 / 3 / 2;
    margin: auto 1rem;
`

    // .div2 { grid-area: 1 / 2 / 2 / 4; }
    // .div3 { grid-area: 2 / 2 / 3 / 3; }
    // .div4 { grid-area: 2 / 3 / 3 / 4; }
function Projects() {
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()
    
    useEffect(()=>{
        if(!sidebar) { toggleSidebar()}
        // eslint-disable-next-line
    }, [])

    let arr = ['pokemon', 'not pokemon']
    // let projectString = '<{`Project &{num}`} />'


    return (
        <Router basename='/my-portfolio/projects'>
            <Container>
                <List>
                    <li>
                        <Link to = {`/${arr[0]}`}>
                            <MainButton text ='Project One'></MainButton>
                        </Link>
                    </li>
                    <li>
                    <MainButton text ='Project Two'></MainButton>
                    </li>
                    <li>
                    <MainButton text ='Project Three'></MainButton>
                    </li>
                    <li>
                    <MainButton text ='Project Four'></MainButton>
                    </li>
                    <li>
                    <MainButton text ='Project Five'></MainButton>
                    </li>
                </List>

                <Switch>
                    <Route path= {`/${arr[0]}`} component ={ProjectDisplay}/>
                </Switch>
            
            </Container>
        </Router>
    )
}

export default Projects
import {useSidebar} from '../SidebarContext'
import {NavLink} from 'react-router-dom'
// eslint-disable-next-line
import styled, {css, ThemeProvider} from 'styled-components';
// import MainButton from './ButtonComponents';

import Title from './Title'
import Picture from './Picture'
import {MainButton} from './ButtonComponents';

const Link = styled(NavLink)`
  text-decoration:none;
`
const ListItem = styled.li`
  padding: 1rem;
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
const NavContainer = styled.div`
  position: absolute;
  top:0;
  text-align: center;
  width:300px;
  ${props => props.theme}
  transition: all 1s;
  height:fill;
`

function Nav() {
    const sidebar = useSidebar()
    const theme = sidebar ? {left: '0%'} : {left:'40%'}
    
    return (
      <ThemeProvider theme ={theme}>
        <NavContainer >
          <Picture />
          <Title />
          <ul>
            
            <ListItem>
              <Link to='/projects'>
                <MainButton text = 'Projects'/>
              </Link>
            </ListItem>

            <ListItem>
              <Link to='/about'>
                <MainButton text = 'About'/>
              </Link>
            </ListItem>

            <ListItem>
              <MainButton text = 'CV'/>
            </ListItem>

            <ListItem>
              <Link to='/contact'>
                <MainButton text = 'Contact'/>
              </Link>
            </ListItem>

          </ul>
        </NavContainer>
      </ThemeProvider>
    )
}
export default Nav
import Title from './Title'
import Picture from './Picture'
import {MainButton} from './ButtonComponents';


import {useSidebar} from '../SidebarContext'
import {NavLink} from 'react-router-dom'
// eslint-disable-next-line
import styled, {css} from 'styled-components';
// import MainButton from './ButtonComponents';

const Link = styled(NavLink)`
  text-decoration:none;
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

function Nav() {
    const sidebar = useSidebar()
    
    return (
        
      <div className={ sidebar ? 'navAfter' : null } style={{position:"relative", display:'flex', width:'100vw', height:'100vh'}}>
        <div >
          <Picture /> 
          <Title />
    
          <ul>
            <ListItem>
              <Link to='/projects'>
                <MainButton text = 'Projects'/>
              </Link>
            </ListItem>

            <ListItem>
              <MainButton text = 'About'/>
            </ListItem>
    
            <ListItem>
              <MainButton text = 'CV'/>
            </ListItem>
    
            <ListItem>
              <MainButton text = 'Contact'/>
            </ListItem>
          </ul>
        </div>
</div>
    )
}
export default Nav
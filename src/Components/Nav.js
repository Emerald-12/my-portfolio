import Title from './Title'
import Picture from './Picture'
import ProjectsBtn from './ProjectsBtn.js'
import AboutBtn from './AboutBtn.js'
import CVBtn from './CVBtn.js'
import ContactBtn from './ContactBtn.js'

import {useSidebar} from '../SidebarContext'
import {NavLink} from 'react-router-dom'
// eslint-disable-next-line
import styled, {css} from 'styled-components';

const Link = styled(NavLink)`
  text-decoration:none;
`


function Nav() {
    const sidebar = useSidebar()
    
    return (
        
      <div style={{position:"relative", display:'flex', width:'100vw', height:'100vh'}}>
        <div className={ sidebar ? 'navAfter' : 'navBefore' }>
          <Picture /> 
          <Title />
    
          <ul className="navigation">
            <li>
              <Link to='/projects'>
                <ProjectsBtn text = 'Projects'/>
              </Link>
            </li>

            <li>
              <AboutBtn text = 'About'/>
            </li>
    
            <li>
              <CVBtn text = 'CV'/>
            </li>
    
            <li>
              <ContactBtn text = 'Contact'/>
            </li>
          </ul>
        </div>
</div>
    )
}
export default Nav
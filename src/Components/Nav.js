import Title from './Title'
import Picture from './Picture'
import ProjectsBtn from './ProjectsBtn.js'
import AboutBtn from './AboutBtn.js'
import CVBtn from './CVBtn.js'
import ContactBtn from './ContactBtn.js'

import {useSidebar} from '../SidebarContext'

import {Link} from 'react-router-dom'

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
                <ProjectsBtn />
              </Link>
            </li>

            <li>
              <AboutBtn />
            </li>
    
            <li>
              <CVBtn />
            </li>
    
            <li>
              <ContactBtn />
            </li>
          </ul>
        </div>
</div>
    )
}
export default Nav
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import {Link} from 'react-router-dom'

function ProjectsBtn() {
    const toggleSidebar = useSidebarUpdate()
    const sidebar = useSidebar()
    
    return (
        <div >
            <button onClick={toggleSidebar}><h1>Projects</h1></button>
        </div>
    )
}

export default ProjectsBtn

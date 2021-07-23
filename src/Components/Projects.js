import {useSidebarUpdate} from '../SidebarContext'

function Projects() {
    const toggleSidebar = useSidebarUpdate()
    
    return (
        <div>
            <button onClick={toggleSidebar}><h1>Projects</h1></button>
        </div>
    )
}

export default Projects

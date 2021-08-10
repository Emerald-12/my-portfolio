import {useSidebar, useSidebarUpdate} from '../SidebarContext'

function ProjectsBtn() {
    const toggleSidebar = useSidebarUpdate()
    const sidebar = useSidebar()
    
    return (
        <div >
            <button onClick={!sidebar ? toggleSidebar : undefined}><h1>Projects</h1></button>
        </div>
    )
}

export default ProjectsBtn

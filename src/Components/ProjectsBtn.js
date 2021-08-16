import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import MainButton from './MainButton'

function ProjectsBtn(props) {
    const toggleSidebar = useSidebarUpdate()
    const sidebar = useSidebar()
    
    return (
        <MainButton text = {props.text} onClick={!sidebar ? toggleSidebar : undefined}></MainButton>
    )
}

export default ProjectsBtn

import {useSidebarUpdate} from '../SidebarContext.js'

function CVBtn() {
    const toggleSidebar = useSidebarUpdate()
    return (
        <div>
            <button onClick={toggleSidebar}><h1>CV</h1></button>
        </div>
    )
}

export default CVBtn
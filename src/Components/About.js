import {useSidebarUpdate} from '../SidebarContext.js'

function About() {
    const toggleSidebar = useSidebarUpdate()
    return (
        <div>
            <button onClick={toggleSidebar}><h1>About</h1></button>
        </div>
    )
}

export default About
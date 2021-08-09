import {useSidebarUpdate} from '../SidebarContext.js'

function AboutBtn() {
    const toggleSidebar = useSidebarUpdate()
    return (
        <div>
            <button onClick={toggleSidebar}><h1>About</h1></button>
        </div>
    )
}

export default AboutBtn
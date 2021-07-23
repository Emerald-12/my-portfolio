import {useSidebarUpdate} from '../SidebarContext.js'

function Contact() {
    const toggleSidebar = useSidebarUpdate()
    return (
        <div>
            <button onClick={toggleSidebar}><h1>Contact</h1></button>
        </div>
    )
}

export default Contact
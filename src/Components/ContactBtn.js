import {useSidebarUpdate} from '../SidebarContext.js'

function ContactBtn() {
    const toggleSidebar = useSidebarUpdate()
    return (
        <div>
            <button onClick={toggleSidebar}><h1>Contact</h1></button>
        </div>
    )
}

export default ContactBtn
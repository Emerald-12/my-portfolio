import {useSidebar, useSidebarUpdate} from '../SidebarContext.js'
import MainButton from './MainButton.js'

function ContactBtn(props) {
    const toggleSidebar = useSidebarUpdate()
    const sidebar = useSidebar()
    return (
        <div>
            <MainButton text = {props.text} onClick={!sidebar ? toggleSidebar : undefined}></MainButton>
        </div>
    )
}

export default ContactBtn
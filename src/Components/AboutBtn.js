import {useSidebarUpdate} from '../SidebarContext.js'
import MainButton from './MainButton'


function AboutBtn(props) {
    const toggleSidebar = useSidebarUpdate()
    return (
            <MainButton text = {props.text} onClick={toggleSidebar}></MainButton>
    )
}

export default AboutBtn
import image from '../Media/Me.jpg'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import {Link} from 'react-router-dom'

function Picture() {

    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()

    return (
        <div>
            <Link to='/'>
            <img src = {image} alt='' onClick={sidebar ? toggleSidebar : undefined}/>
            </Link>
        </div>
    )
}

export default Picture
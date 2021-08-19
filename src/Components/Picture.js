import image from '../Media/Me.jpg'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Img = styled.img`
    min-width: 10rem;
    max-width: 15vw;
    margin: 2rem 0 0.25rem;
    border-radius: 100%;
`

function Picture() {

    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()

    return (
        <div>
            <Link to='/'>
            <Img src = {image} alt='' onClick={sidebar ? toggleSidebar : undefined}/>
            </Link>
        </div>
    )
}

export default Picture
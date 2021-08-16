import {useEffect} from 'react'
// eslint-disable-next-line
import styled, {css} from 'styled-components'

import {useSidebar, useSidebarUpdate} from '../SidebarContext'

const Display = styled.div`
    height:45vh;
    width:60vw;
`
const Frame =styled.iframe`
    width: 100%;
    height: 100%;   
`


function ProjectDisplay() {
    const sidebar = useSidebar()
    const toggleSidebar =useSidebarUpdate()
    
    useEffect(()=>{
        if(!sidebar) { toggleSidebar()}
        // eslint-disable-next-line
    }, [])

    return (
        <Display>
            <Frame src='https://tomkhcoding.github.io/pokemon-search/' title='test'></Frame>
        </Display>
    )
}

export default ProjectDisplay
import { useEffect } from "react"
// eslint-disable-next-line
import styled from "styled-components"
import { useSidebar, useSidebarUpdate } from "../SidebarContext"

export default function MProjects() {
    const sidebar = useSidebar()
    const toggleSidebar = useSidebarUpdate()
    useEffect(()=>{
        if(sidebar) { toggleSidebar()}
        // eslint-disable-next-line
        }, [])
    return (
        <div>
            <p style={{color:'white'}}>Hello projects world</p>
        </div>
    )
}